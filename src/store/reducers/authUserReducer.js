import {
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  AUTH_LOGIN,
  AUTH_CLEAR_STORE,
} from '../types/authTypes';
import {removeUserSession, storeUserSession} from '../../storage';

const initialState = {
  user: {},
  isAuth: false,
  isLoading: false,
  errors: {login: [], password: []},
};

export const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_SUCCESS:
      storeUserSession('token', action.payload);
      return {
        ...state,
        user: {},
        isAuth: true,
        isLoading: false,
        errors: {login: [], password: []},
      };
    case AUTH_LOGOUT:
      removeUserSession('token');
      return {
        user: {},
        isAuth: false,
        isLoading: false,
        errors: {login: [], password: []},
      };

    case AUTH_FAIL:
      return {
        ...state,
        user: {},
        isAuth: false,
        isLoading: false,
        errors: {
          login: action.payload?.login || [],
          password: action.payload?.password || [],
        },
      };

    case AUTH_CLEAR_STORE:
      return {
        user: {},
        isAuth: false,
        isLoading: false,
        errors: {login: [], password: []},
      };

    default:
      return state;
  }
};
