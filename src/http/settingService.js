import $api from '.';

export const getMaxPrice = async () => {
  const result = await $api.get('/get-max-price');
  return result.data.data;
};
