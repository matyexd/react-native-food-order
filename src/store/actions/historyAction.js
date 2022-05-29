import {GET_HISTORY, GET_ORDER} from '../types/historyTypes';

export const getHistoryAction = userId => {
  return {type: GET_HISTORY, userId: userId};
};

export const getOrderAction = orderId => {
  return {type: GET_ORDER, orderId: orderId};
};
