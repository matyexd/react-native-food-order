import $api from '.';
import {orders} from '../temp/menu';

const DEBUG_MODE = false;
export const historyFetch = async userId => {
  // if (DEBUG_MODE) return orders;

  const orders = await $api.get(`/get-orders/${userId}`);

  return orders.data.data;
};

export const orderFetch = async orderId => {
  const order = await $api.get(`/get-order/${orderId}`);
  return order.data.data;
};
