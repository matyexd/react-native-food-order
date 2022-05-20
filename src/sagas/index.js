import {all} from 'redux-saga/effects';
import {loginWatcher} from './authSaga';

export function* rootSaga() {
  yield all([loginWatcher()]);
}
