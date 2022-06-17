import {
  GET_HISTORY,
  GET_HISTORY_FAILED,
  GET_HISTORY_SUCCEED,
} from '../types/historyTypes';

const initialState = {
  orders: [],
  loading: false,
  error: false,
};

export const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HISTORY:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_HISTORY_SUCCEED:
      return {
        ...state,
        orders: [...action.payload],
        loading: false,
        error: false,
      };
    case GET_HISTORY_FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
