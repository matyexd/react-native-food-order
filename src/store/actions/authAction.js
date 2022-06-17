import {
  AUTH_FAIL,
  AUTH_SUCCESS,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_CLEAR_STORE,
  AUTH_CHECK,
  AUTH_CHECK_SUCCESS,
  AUTH_CHECK_FAIL,
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

export const checkLogin = () => ({
  type: AUTH_CHECK,
});

export const checkLoginSuccess = payload => ({
  type: AUTH_CHECK_SUCCESS,
  payload: payload,
});

export const checkLoginFail = payload => ({
  type: AUTH_CHECK_FAIL,
  payload: payload,
});

export const clearAuthUserStoreAction = () => ({
  type: AUTH_CLEAR_STORE,
});
