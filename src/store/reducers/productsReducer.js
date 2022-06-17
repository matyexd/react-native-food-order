import {GET_MENU, GET_MENU_FAILED, GET_MENU_SUCCEED} from '../types/menuTypes';

const initialState = {
  products: [],
  loading: true,
  error: false,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case GET_MENU_SUCCEED:
      return {
        ...state,
        products: [...action.payload],
        loading: false,
        error: false,
      };
    case GET_MENU_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
