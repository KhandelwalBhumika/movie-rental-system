import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001/"
});

instance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token");
        config.headers.Authorization = token ? token: null;
        config.headers['Accept'] = 'application/json, text/plain, */*'
        config.headers['Content-Type'] = 'application/json'
        // config.headers.origin = "http://localhost:3001/"     
        // config.headers['Access-Control-Allow-Origin'] = 'http://localhost:3001'
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;