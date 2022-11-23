
import axios from "axios";


const BASE_URL = `${process.env.REACT_APP_BASE_URL}`;


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
});

userRequest.interceptors.request.use(function (config) {
    const user = JSON.parse(localStorage.getItem("user")) || null
    let TOKEN = user ? user.token : null;
    config.headers["token"] = `Bearer ${TOKEN}`;
    return config;
});