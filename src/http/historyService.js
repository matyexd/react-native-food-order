import $api from '.';
import {orders} from '../temp/menu';

const DEBUG_MODE = false;
export const historyFetch = async userId => {
  // if (DEBUG_MODE) return orders;

  const orders = await $api.get(`/get-orders/${userId}`);

  return orders.data.data;
};

// export const orderFetch = async userId => {
//   const order = await $api.get(`/get-orders/${userId}`);
//   console.log('====================================');
//   console.log(order.data.data + 'kgkgkgkgk');
//   console.log('====================================');
//   return order.data.data;
// };
