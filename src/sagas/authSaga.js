import {call, put, takeEvery} from 'redux-saga/effects';
import {AUTH_LOGIN} from '../store/types/authTypes';
import {loginFetch, setAuthSuccessAction} from '../store/actions/authAction';

export function* loginWorker({payload}) {
  try {
    console.log(123);
    const data = yield call(loginFetch, payload);
    yield put(setAuthSuccessAction(data));
  } catch (e) {
    console.log(e);
  }
}

export function* loginWatcher() {
  yield takeEvery(AUTH_LOGIN, loginWorker);
}
