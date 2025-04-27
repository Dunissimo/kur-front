import axios from 'axios';

export const API_URL = 'https://kur-backend-pink.vercel.app/';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});
