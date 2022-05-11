import {
  ADD_PRODUCT_TO_BASKET,
  DELETE_PRODUCT_FROM_BASKET,
} from '../types/basketTypes';

const initialState = {
  products: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case DELETE_PRODUCT_FROM_BASKET:
      return {
        ...state,
      };
    default:
      return state;
  }
};
