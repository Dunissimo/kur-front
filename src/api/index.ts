import axios from 'axios';

export const API_URL = 'https://kur-backend-pink.vercel.app/';
// export const API_URL = 'http://localhost:3000/';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});
