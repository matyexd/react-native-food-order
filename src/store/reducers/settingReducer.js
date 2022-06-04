import {
  GET_MAX_PRICE,
  GET_MAX_PRICE_FAILED,
  GET_MAX_PRICE_SUCCESS,
} from '../types/settingTypes';

const initialState = {
  maxPrice: {},
  loading: false,
  error: false,
};
export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAX_PRICE:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_MAX_PRICE_SUCCESS:
      return {
        ...state,
        maxPrice: action.payload.max_price,
        loading: false,
        error: false,
      };
    case GET_MAX_PRICE_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
