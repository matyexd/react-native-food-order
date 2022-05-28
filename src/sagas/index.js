import {all} from 'redux-saga/effects';
import {historyWatcher, orderWatcher} from './historySaga';
import {checkAuthWatcher, loginWatcher} from './authSaga';
import {categoriesWatcher, menuWatcher} from './menuSaga';

export function* rootSaga() {
  yield all([
    loginWatcher(),
    categoriesWatcher(),
    menuWatcher(),
    historyWatcher(),
    checkAuthWatcher(),
    orderWatcher(),
  ]);
}
