import axios, { Axios, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
    baseURL: 'https://reqres.in/api/'
}

const api: Axios = axios.create(axiosConfig);

export default api;

