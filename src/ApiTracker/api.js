import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001/"
});

instance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token");
        config.headers.Authorization = token ? token: null;
        // config.headers.origin = "http://localhost:3001/"     
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;