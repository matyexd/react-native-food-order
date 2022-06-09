import axios from 'axios';
import {retrieveUserSession, storeUserSession} from '../storage';
import {API_URL} from '@env';

export const BASE_API_URL = API_URL;

const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_API_URL,
});

const $refresh_api = axios.create({
  withCredentials: true,
  baseURL: BASE_API_URL,
});

$refresh_api.interceptors.request.use(async config => {
  const token = await retrieveUserSession('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

$api.interceptors.request.use(async config => {
  const token = await retrieveUserSession('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

$api.interceptors.response.use(
  config => {
    // console.log(config);
    return config;
  },
  async error => {
    const originalRequest = error.config;
    console.log(error.config._isRetry);
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await $refresh_api.post('/refresh');
        console.log(response);
        await storeUserSession('token', response.data.access_token);
        return $api.request(originalRequest);
      } catch (e) {
        console.log(e);
        console.log('НЕ АВТОРИЗОВАН');
      }
    }
    throw error;
  },
);

export default $api;
