import {call, put, takeEvery} from 'redux-saga/effects';
import {historyFetch} from '../http/historyService';
import {
  GET_HISTORY,
  GET_HISTORY_FAILED,
  GET_HISTORY_SUCCEED,
} from '../store/types/historyTypes';

export function* fetchHistory() {
  try {
    const data = yield call(historyFetch);
    yield put({type: GET_HISTORY_SUCCEED, payload: data});
  } catch {
    yield put({type: GET_HISTORY_FAILED});
  }
}

export function* historyWatcher() {
  yield takeEvery(GET_HISTORY, fetchHistory);
}
