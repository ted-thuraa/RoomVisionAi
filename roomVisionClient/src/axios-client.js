import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

// on every request the auth token will be passed
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers.authorization = `Bearer ${token}`;
    return config;
});

// response interceptor
axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { response } = error;
        // User unauthorised
        if (response.status == 401) {
            localStorage.removeItem("ACCESS_TOKEN");
        }

        throw error;
    }
);

export default axiosClient;
