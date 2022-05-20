import {all} from 'redux-saga/effects';
import {loginWatcher} from './authSaga';
import {categoriesWatcher} from './menuSaga';

export function* rootSaga() {
  yield all([loginWatcher(), categoriesWatcher()]);
}
