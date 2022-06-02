import axios from 'axios';
import {retrieveUserSession} from '../storage';
import {API_URL} from '@env';

export const BASE_API_URL = API_URL;

const $api = axios.create({
  withCredentials: true,
  baseURL: BASE_API_URL,
});

$api.interceptors.request.use(async config => {
  const token = await retrieveUserSession('token');
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// $api.interceptors.response.use(
//   config => {
//     return config;
//   },
//   // error => {
//   //   console.log(error);
//   // },
// );

export default $api;
