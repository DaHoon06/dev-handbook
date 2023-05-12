import axios, { AxiosInstance } from 'axios';

const test = 'no1recipe-domain'

const baseURL = test === 'no1recipe-domain' ? 'https://api.no1recipe.com/api' : 'http://localhost:3000/api';
const headers = {
  'Content-Type': 'application/json',
};
const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  headers,
  timeout: 20000,
});

axiosInstance.interceptors.request.use(config => {
  return config;
});

axiosInstance.interceptors.response.use(response => {
  return response;
});

export const instance = axiosInstance;