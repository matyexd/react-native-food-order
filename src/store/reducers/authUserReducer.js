import {AUTH_SUCCESS} from '../types/authTypes';

const initialState = {
  user: {},
  isAuth: false,
};

export const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        user: {...state.user, email: action.payload.email},
        isAuth: true,
      };

    default:
      return state;
  }
};
