import {
  CLEAR_ORDER,
  GET_ORDER,
  GET_ORDER_FAILED,
  GET_ORDER_SUCCEED,
} from '../types/historyTypes';

const initialState = {
  order: {},
  loading: false,
  error: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return {
        ...state,
        loading: true,
        error: false,
      };

    case GET_ORDER_SUCCEED:
      return {
        ...state,
        order: action.payload,
        loading: false,
        error: false,
      };
    case GET_ORDER_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case CLEAR_ORDER:
      return {
        ...state,
        order: {},
        loading: false,
        error: false,
      };

    default:
      return state;
  }
};
