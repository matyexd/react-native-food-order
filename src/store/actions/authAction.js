import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_CLEAR_STORE,
} from '../types/authTypes';
import $api from '../../http';

export const loginAction = (login, password) => ({
  type: AUTH_LOGIN,
  payload: {login, password},
});

export const setAuthSuccessAction = payload => ({
  type: AUTH_SUCCESS,
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
  return $api
    .post('/login', {login: login, password: password})
    .then(data => data);
};

export const clearAuthUserStoreAction = () => ({
  type: AUTH_CLEAR_STORE,
});

export const checkAuthFetch = () => {
  return $api.get('/user');
};
