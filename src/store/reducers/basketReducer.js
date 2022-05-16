import {
  ADD_PRODUCT_TO_BASKET,
  CHANGE_PRODUCT_COUNT,
  DELETE_PRODUCT_FROM_BASKET,
} from '../types/basketTypes';

const initialState = {
  products: [],
  totalCost: 0,
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET: {
      const products = addOrCreateProduct(state.products, action.product);

      return {
        ...state,
        products: [...products],
        totalCost: state.totalCost + Number(action.product.price),
      };
    }

    case DELETE_PRODUCT_FROM_BASKET:
      let newProducts = state.products.filter(
        product => product.product.id !== action.product.id,
      );
      let totalCost = 0;
      if (newProducts.length > 0) {
        totalCost = newProducts.reduce((a, b) => {
          return a + b.product.price * b.count;
        }, 0);
      }
      return {
        ...state,
        products: [...newProducts],
        totalCost,
      };
    case CHANGE_PRODUCT_COUNT: {
      const products = state.products;
      for (let i = 0; i < products.length; i++) {
        if (products[i].product.id === action.product.id) {
          products[i].count = action.count;
          break;
        }
      }
      let totalCost = products.reduce((a, b) => {
        return a + b.product.price * b.count;
      }, 0);

      return {
        ...state,
        products: [...products],
        totalCost,
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
