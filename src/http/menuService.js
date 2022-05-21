import $api from '.';

export const categoriesFetch = async () => {
  const result = await $api.get('/get-category');
  return result.data.data;
};

export const menuFetch = async args => {
  const result = await $api.get('/get-menu', {
    params: {
      date: args.date,
    },
  });
  return result.data.data;
};
