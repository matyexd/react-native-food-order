import {all} from 'redux-saga/effects';
import {loginWatcher} from './authSaga';
import {historyWatcher} from './historySaga';
import {checkAuthWatcher, loginWatcher} from './authSaga';
import {categoriesWatcher, menuWatcher} from './menuSaga';

export function* rootSaga() {
  yield all([
    loginWatcher(),
    categoriesWatcher(),
    menuWatcher(),
    historyWatcher(),
    checkAuthWatcher(),
  ]);
}
