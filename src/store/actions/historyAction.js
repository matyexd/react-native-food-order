import {GET_HISTORY} from '../types/historyTypes';

export const getHistoryAction = userId => {
  return {type: GET_HISTORY, userId: userId};
};
