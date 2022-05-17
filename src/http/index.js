import axios from 'axios';
import {retrieveUserSession} from '../storage';

export const API_URL = `http://192.168.1.4:8000`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use(
  async config => {
    const token = await retrieveUserSession('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error),
);

$api.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    if (error.response.status === 401) {
    }
  },
);

export default $api;
