import $api from '.';

export const categoriesFetch = async () => {
  const result = await $api.get('/get-category'); //.then(response => response.data);
  return result.data.data;
};

export const menuFetch = async () => {
  const result = await $api.get('/get-menu?date=2022-12-13&category_id=1');
  console.log('====================================');
  console.log(result + 'dmdnjdnvnfb');
  console.log('====================================');
  return result;
};
