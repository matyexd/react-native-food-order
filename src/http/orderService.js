import $api from '.';

export const createOrderRequest = async (basket, date, id) => {
  const data = {
    baskets: basket,
  };

  const result = await $api.post('/create-order', data).catch(e => {
    console.log(e, e?.response);
    return e.response;
  });
  return result;
};

export const deleteOrder = async id => {
  const result = await $api.delete(`/delete-order/${id}`).catch(e => {
    console.log(e, e?.response);
  });
};
