import {combineReducers} from 'redux';
import {basketReducer} from './basketReducer';
import {productsReducer} from './productsReducer';
import {categoriesReducer} from './categoriesReducer';
import {authUserReducer} from './authUserReducer';

export const rootReducer = combineReducers({
  basket: basketReducer,
  products: productsReducer,
  categories: categoriesReducer,
  auth: authUserReducer,
});
