import {call, put, takeEvery} from 'redux-saga/effects';
import {getMaxPrice} from '../http/settingService';
import {
  GET_MAX_PRICE,
  GET_MAX_PRICE_FAILED,
  GET_MAX_PRICE_SUCCESS,
} from '../store/types/settingTypes';

export function* fetchMaxPrice() {
  try {
    const data = yield call(getMaxPrice);
    yield put({type: GET_MAX_PRICE_SUCCESS, payload: data});
  } catch {
    yield put({type: GET_MAX_PRICE_FAILED});
  }
}

export function* maxPriceWatcher() {
  yield takeEvery(GET_MAX_PRICE, fetchMaxPrice);
}
