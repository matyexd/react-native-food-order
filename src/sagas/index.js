import {all} from 'redux-saga/effects';
import {historyWatcher, orderWatcher} from './historySaga';
import {checkAuthWatcher, loginWatcher} from './authSaga';
import {categoriesWatcher, menuWatcher} from './menuSaga';
import {maxPriceWatcher} from './settingSaga';

export function* rootSaga() {
  yield all([
    loginWatcher(),
    categoriesWatcher(),
    menuWatcher(),
    historyWatcher(),
    checkAuthWatcher(),
    orderWatcher(),
    maxPriceWatcher(),
  ]);
}
