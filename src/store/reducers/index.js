import {combineReducers} from 'redux';
import {basketReducer} from './basketReducer';
import {productsReducer} from './productsReducer';
import {categoriesReducer} from './categoriesReducer';
import {authUserReducer} from './authUserReducer';
import {historyReducer} from './historyReducer';
import {orderReducer} from './orderReducer';

export const rootReducer = combineReducers({
  basket: basketReducer,
  products: productsReducer,
  categories: categoriesReducer,
  authUser: authUserReducer,
  history: historyReducer,
  order: orderReducer,
});
