// import axios from './axios';

export const loginService=async(bodyData)=>{

    try {
        
        const url = 'https://apis.ccbp.in/login'
        const options = {
          method: 'POST',
          body: JSON.stringify(bodyData),
        }
        const response = await fetch(url, options)
        return response
    }
    catch (error) {
        console.log("Login - Error", error)
        return error
    }

}