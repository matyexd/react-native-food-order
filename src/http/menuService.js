import $api from '.';
import {data} from '../temp/menu';

const DEBUG_MODE = false;

export const categoriesFetch = async () => {
  if (DEBUG_MODE)
    return [
      {id: 1, name: 'Комплексный обед'},
      {id: 2, name: 'Салаты'},
      {id: 3, name: 'Супы'},
      {id: 4, name: 'Горячее из мяса'},
      {id: 5, name: 'Горячее из птицы'},
      {id: 6, name: 'Горячее из рыбы'},
      {id: 7, name: 'Гарниры'},
      {id: 8, name: 'Мучные изделия'},
      {id: 9, name: 'Напитки и соки'},
      {id: 10, name: 'Соусы'},
      {id: 11, name: 'Пельмени и вареники'},
      {id: 12, name: 'Прочее'},
      {id: 13, name: 'Пироги и торты'},
    ];

  const result = await $api.get('/get-category');
  return result.data.data;
};

export const menuFetch = async args => {
  if (DEBUG_MODE) return data;

  const result = await $api.get('/admin/get-dishes');
  return result.data.data;
};
