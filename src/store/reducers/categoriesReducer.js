const initialState = {
  categories: [
    {id: 1, categoryName: 'Комплексный обед'},
    {id: 2, categoryName: 'Салаты'},
    {id: 3, categoryName: 'Супы'},
    {id: 4, categoryName: 'Молочные блюда'},
    {id: 5, categoryName: 'Горячее из мяса'},
    {id: 6, categoryName: 'Горячее из птицы'},
    {id: 7, categoryName: 'Горячее из рыбы'},
    {id: 8, categoryName: 'Гарниры'},
    {id: 9, categoryName: 'Мучные изделия'},
    {id: 10, categoryName: 'Напитки и соки'},
    {id: 11, categoryName: 'Соусы'},
    {id: 12, categoryName: 'Пельмени и вареники'},
    {id: 13, categoryName: 'Прочее'},
    {id: 14, categoryName: 'Пироги и торты'},
  ],
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
