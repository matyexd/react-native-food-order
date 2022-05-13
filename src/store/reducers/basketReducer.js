import {
  ADD_PRODUCT_TO_BASKET,
  CHANGE_PRODUCT_COUNT,
  DELETE_PRODUCT_FROM_BASKET,
} from '../types/basketTypes';

const initialState = {
  products: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET: {
      const products = addOrCreateProduct(state.products, action.product);
      return {
        ...state,
        products: [...products],
      };
    }

    case DELETE_PRODUCT_FROM_BASKET:
      return {
        ...state,
      };
    case CHANGE_PRODUCT_COUNT: {
      const products = state.products;
      for (let i = 0; i < products.length; i++) {
        if (products[i].product.id === action.product.id) {
          products[i].count = action.count;
          break;
        }
      }
      return {
        ...state,
        products: [...products],
      };
    }
    default:
      return state;
  }
};

function addOrCreateProduct(products, product) {
  if (products.length > 0) {
    for (let i = 0; i < products.length; i++) {
      if (products[i].product.id === product.id) {
        products[i].count = products[i].count + 1;
        return products;
      }
    }
  }

  products.push({
    product: product,
    count: 1,
  });

  return products;
}
