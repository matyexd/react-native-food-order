import axios from 'axios';

export const API_URL = `http://192.168.1.4:8000`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${1}`;
  return config;
});

export default $api;
