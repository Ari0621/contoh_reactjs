// src/api/index.jsx
//import axios
import axios from 'axios';
const token = localStorage.getItem('token');
const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://api.alsavdev.com/api',
    headers:{
        Authorization: 'Bearer ' +token
    }
})

export default Api

