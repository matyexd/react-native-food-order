import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from '../types/authTypes';
import $api from '../../http';

export const loginAction = (login, password) => ({
  type: AUTH_LOGIN,
  payload: {login, password},
});

export const setAuthSuccessAction = payload => ({
  type: AUTH_LOGIN,
  payload: payload,
});

export const setAuthFailAction = payload => ({
  type: AUTH_FAIL,
  payload: payload,
});

export const logoutAction = () => ({
  type: AUTH_LOGOUT,
});

export const loginFetch = ({login, password}) => {
  console.log(1);
  return $api
    .post('/auth/login', {email: login, password: password})
    .then(response => response.data);
};
