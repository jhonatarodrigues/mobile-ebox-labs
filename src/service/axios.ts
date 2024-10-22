import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from '@env';

console.log(' process.env.BASE_URL ==', BASE_URL);

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
});

export const getInstance = (): AxiosInstance => axiosInstance;
