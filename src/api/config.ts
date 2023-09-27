import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: "https://movies-springboot-api-lsq3.onrender.com",
});

export default api;
