import axios from "axios";

const apiBase = axios.create({
    'baseURL': 'http://localhost:3333',
    headers: {
        Accept: "application/json",
        //Authorization: 'Bearer ' + localStorage.getItem('webtoken')
        }
    });

    export default apiBase;
