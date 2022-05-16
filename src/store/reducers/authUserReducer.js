import {AUTH_SUCCESS} from '../types/authTypes';
import {storeUserSession} from '../../storage';

const initialState = {
  user: {},
  isAuth: false,
};

export const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      console.log(action.payload);
      storeUserSession('token', action.payload.access_token);
      return {
        ...state,
        user: {...state.user, email: action.payload.user.email},
        isAuth: true,
      };

    default:
      return state;
  }
};
