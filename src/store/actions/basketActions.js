import {
  ADD_PRODUCT_TO_BASKET,
  DELETE_PRODUCT_FROM_BASKET,
} from '../types/basketTypes';

export const addProductAction = product => {
  return {type: ADD_PRODUCT_TO_BASKET, product: product};
};

export const deleteProductAction = product => {
  return {type: DELETE_PRODUCT_FROM_BASKET, product: product};
};
