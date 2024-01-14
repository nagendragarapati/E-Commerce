import axios from "axios";

const app = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        // 'Content-Type': 'multipart/form-data'
    },
    withCredentials: false
})

export default app;
