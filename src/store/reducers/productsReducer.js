import {data} from '../../temp/menu';

const initialState = {
  products: data,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
