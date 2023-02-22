import axios from "axios";

const apiBase = axios.create({
    baseURL: process.env.BACKEND,
    headers: {
        Accept: "application/json",
        //Authorization: 'Bearer ' + localStorage.getItem('webtoken')
        }
    });

    export default apiBase;
