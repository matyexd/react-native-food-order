import $api from '.';
import {orders} from '../temp/menu';

const DEBUG_MODE = false;
export const historyFetch = async userId => {
  // if (DEBUG_MODE) return orders;

  const orders = await $api.get(`/get-orders/${userId}`);

  return orders.data.data;
};

export const orderFetch = async OrderId => {
  const order = await $api.get(`/get-order/41`);
  console.log('====================================');
  console.log(order.data.data.baskets[0]);
  console.log('====================================');
  return order.data.data;
};
