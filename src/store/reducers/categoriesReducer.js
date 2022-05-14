const initialState = {
  categories: [
    {id: 1, categoryName: 'Комплексный обед'},
    {id: 2, categoryName: 'Салаты'},
    {id: 3, categoryName: 'Супы'},
    {id: 4, categoryName: 'Горячее из мяса'},
    {id: 5, categoryName: 'Горячее из птицы'},
    {id: 6, categoryName: 'Горячее из рыбы'},
    {id: 7, categoryName: 'Гарниры'},
    {id: 8, categoryName: 'Мучные изделия'},
    {id: 9, categoryName: 'Напитки и соки'},
    {id: 10, categoryName: 'Соусы'},
    {id: 11, categoryName: 'Пельмени и вареники'},
    {id: 12, categoryName: 'Прочее'},
    {id: 13, categoryName: 'Пироги и торты'},
  ],
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
