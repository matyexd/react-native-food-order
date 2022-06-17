import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAILED,
  GET_CATEGORIES_SUCCEED,
} from '../types/menuTypes';

const initialState = {
  categories: [],
  loading: true,
  error: false,
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case GET_CATEGORIES_SUCCEED:
      return {
        ...state,
        categories: [...action.payload],
        loading: false,
        error: false,
      };
    case GET_CATEGORIES_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
