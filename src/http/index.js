import axios from "axios";
import { WebService } from "../services/webService";

const API_URL = "https://gateway.scan-interfax.ru/api/";

const api = axios.create({
    baseURL: API_URL
});

api.interceptors.request.use(config => {
    if(WebService.authCheck()){
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return config;
})

export default api;