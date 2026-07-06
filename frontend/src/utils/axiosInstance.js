import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
    withCredentials: true, // Important for cookies (refresh tokens) if we use them
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor to add token from local storage or context if not using cookies
api.interceptors.request.use(
    (config) => {
        // We will add token logic here later if we use localStorage
        // const token = localStorage.getItem('token');
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
