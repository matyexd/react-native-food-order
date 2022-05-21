import {GET_CATEGORIES, GET_MENU} from '../types/menuTypes';

export const getCategoriesAction = () => {
  return {type: GET_CATEGORIES};
};

export const getMenuActions = date => {
  return {type: GET_MENU, date: date};
};
