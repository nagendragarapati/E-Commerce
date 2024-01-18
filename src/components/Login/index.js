import { useState, useEffect } from 'react'
import { loginService } from '../Services/servicecalls'
import { useNavigate, Navigate } from 'react-router-dom'
import Cookies from "js-cookie"

import './index.css'

const initialFormFields = {
    username: "mosh",
    password: "DevMosh22"
}

const Login = () => {

    const [formValues, setFormValues] = useState(initialFormFields)
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate();

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
        return <Navigate to="/" />
    }


    const onChangeFormFields = (event) => {
        setFormValues({ ...formValues, [event.target.name]: event.target.value })

    }

    const onSubmitSuccess = (token) => {
        Cookies.set('jwt_token', token.jwt_token, { expires: 10 })
        navigate('/', { replace: true })
    }

    const onSubmitForm = async (event) => {
        event.preventDefault()
        const response = await loginService(formValues)
        const data = await response.json()

        if (response.ok === true) {
            onSubmitSuccess(data)

        } else {
            setErrorMsg(data.error_msg)

        }

    }





    const renderPasswordField = () => {

        return (
            <>
                <label className="input-label" htmlFor="password">
                    PASSWORD
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className="password-input-field"
                    value={formValues.password}
                    onChange={(e) => onChangeFormFields(e)}
                    placeholder="Password"
                />
            </>
        )
    }

    const renderUsernameField = () => {

        return (
            <>
                <label className="input-label" htmlFor="username">
                    USERNAME
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    className="username-input-field"
                    value={formValues.username}
                    onChange={(e) => onChangeFormFields(e)}
                    placeholder="Username"
                />
            </>
        )
    }

    return (

        <div className="login-form-container">
            <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                className="login-website-logo-mobile-img"
                alt="website logo"
            />
            <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                className="login-img"
                alt="website login"
            />
            <form className="form-container" onSubmit={onSubmitForm}>
                <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                    className="login-website-logo-desktop-img"
                    alt="website logo"
                />
                <div className="input-container">{renderUsernameField()}</div>
                <div className="input-container">{renderPasswordField()}</div>
                <button type="submit" className="login-button">
                    Login
                </button>
                {errorMsg && <p className="error-message">*{errorMsg}</p>}
            </form>
        </div>
    )

}

export default Login
