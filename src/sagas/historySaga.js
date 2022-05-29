import {call, put, takeEvery} from 'redux-saga/effects';
import {historyFetch, orderFetch} from '../http/historyService';
import {
  GET_HISTORY,
  GET_HISTORY_FAILED,
  GET_HISTORY_SUCCEED,
  GET_ORDER,
  GET_ORDER_FAILED,
  GET_ORDER_SUCCEED,
} from '../store/types/historyTypes';

export function* fetchHistory(args) {
  try {
    const data = yield call(historyFetch, args.userId);
    yield put({type: GET_HISTORY_SUCCEED, payload: data});
  } catch {
    yield put({type: GET_HISTORY_FAILED});
  }
}

export function* historyWatcher() {
  yield takeEvery(GET_HISTORY, fetchHistory);
}

export function* fetchOrder(args) {
  console.log('====================================');
  console.log(11222);
  console.log('====================================');
  try {
    const data = yield call(orderFetch, args.orderId);
    yield put({type: GET_ORDER_SUCCEED, payload: data});
  } catch {
    yield put({type: GET_ORDER_FAILED});
  }
}

export function* orderWatcher() {
  yield takeEvery(GET_ORDER, fetchOrder);
}
