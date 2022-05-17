import {AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT} from '../types/authTypes';
import {removeUserSession, storeUserSession} from '../../storage';

const initialState = {
  user: {},
  isAuth: false,
};

export const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      storeUserSession('token', action.payload.access_token);
      console.log('dfd');
      return {
        ...state,
        user: {...state.user, email: action.payload.user.email},
        isAuth: true,
      };
    case AUTH_LOGOUT:
      removeUserSession('token');
      return {
        ...state,
        user: {},
        isAuth: false,
      };

    case AUTH_FAIL:
      return {
        ...state,
        user: {},
        isAuth: false,
      };

    default:
      return state;
  }
};
