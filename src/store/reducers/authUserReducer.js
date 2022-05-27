import {
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  AUTH_LOGIN,
  AUTH_CLEAR_STORE,
  AUTH_CHECK,
  AUTH_CHECK_SUCCESS,
  AUTH_CHECK_FAIL,
} from '../types/authTypes';
import {removeUserSession, storeUserSession} from '../../storage';

const initialState = {
  user: {},
  isAuth: false,
  isLoadingSplash: true,
  isLoading: false,
  errors: {login: [], password: []},
  errorCheckAuth: '',
  isWasLogin: false,
};

export const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        user: {},
        isAuth: false,
        isLoading: true,
        errorCheckAuth: '',
        errors: {login: [], password: []},
      };
    case AUTH_SUCCESS:
      storeUserSession('token', action.payload);
      return {
        ...state,
        user: {},
        isAuth: true,
        errorCheckAuth: '',
        errors: {login: [], password: []},
        isWasLogin: true,
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
        errorCheckAuth: '',
      };

    case AUTH_LOGOUT:
      removeUserSession('token');
      return {
        ...state,
        user: {},
        isAuth: false,
        isLoading: false,
        isLoadingSplash: false,
        errors: {login: [], password: []},
      };

    case AUTH_CLEAR_STORE:
      return {
        ...state,
        user: {},
        isAuth: false,
        errors: {login: [], password: []},
      };

    case AUTH_CHECK:
      return {
        ...state,
        isLoadingSplash: true,
      };

    case AUTH_CHECK_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        user: {
          id: action.payload.data.id,
          email: action.payload.data.email,
          name: action.payload.data.name,
          floor: action.payload.data.floor,
        },
        isLoadingSplash: false,
        isAuth: true,
        isLoading: false,
        errors: {login: [], password: []},
        errorCheckAuth: '',
      };
    case AUTH_CHECK_FAIL:
      return {
        ...state,
        user: {},
        isAuth: false,
        isLoading: false,
        isLoadingSplash: false,
        errors: {login: [], password: []},
        errorCheckAuth: action.payload,
      };

    default:
      return state;
  }
};
