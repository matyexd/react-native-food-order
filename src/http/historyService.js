import $api from '.';



export const historyFetch = async userId => {


  const orders = await $api.get(`/get-orders/${userId}`);

  return orders.data.data;
};

export const orderFetch = async orderId => {
  const order = await $api.get(`/get-order/${orderId}`);
  return order.data.data;
};
