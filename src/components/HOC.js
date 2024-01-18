import {Navigate } from 'react-router-dom'
import Cookies from "js-cookie"


const Hoc = (ActualComponent) => {

    function UpdatedComponent(){
        const jwtToken = Cookies.get('jwt_token')

        return(
            <>
                {
                    jwtToken!==undefined?<ActualComponent/>:<Navigate to="/login" />
                }
            </>
        )
    }

    return UpdatedComponent
    
}

export default Hoc