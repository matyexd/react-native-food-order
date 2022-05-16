import axios from 'axios';
import {retrieveUserSession} from '../storage';

export const API_URL = `http://192.168.1.4:8000`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use(config => {
  retrieveUserSession('token', config);
  console.log(config);
  return config;
});

export default $api;
