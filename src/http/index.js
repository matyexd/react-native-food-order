import axios from 'axios';
import {retrieveUserSession} from '../storage';

export const API_URL = `https://food-order-2.academy.smartworld.team/api/api`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
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
