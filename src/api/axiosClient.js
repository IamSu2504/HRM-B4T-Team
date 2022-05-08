import axios from 'axios';

export const AxiosClient = axios.create({
    // baseURL: 'http://localhost:8080/Capstone-Back-End-0.0.1-SNAPSHOT',
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
export default AxiosClient