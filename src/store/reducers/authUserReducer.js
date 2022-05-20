import {AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT} from '../types/authTypes';
import {removeUserSession, storeUserSession} from '../../storage';

const initialState = {
  user: {email: false},
  isAuth: false,
};

export const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      console.log(action.payload.data.access_token);
      storeUserSession('token', action.payload.data.access_token);
      return {
        ...state,
        user: {...state.user, email: true},
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
