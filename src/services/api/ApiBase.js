import axios from "axios";

const apiBase = axios.create({
    'baseURL': process.env.API_URL,
    headers: {
        Accept: "application/json",
        //Authorization: 'Bearer ' + localStorage.getItem('webtoken')
        }
    });

    export default apiBase;
