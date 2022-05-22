import {call, put, takeEvery} from 'redux-saga/effects';
import {AUTH_CHECK, AUTH_LOGIN} from '../store/types/authTypes';
import {
  loginFetch,
  setAuthFailAction,
  setAuthSuccessAction,
} from '../store/actions/authAction';

function* loginWorker({payload}) {
  try {
    const data = yield call(loginFetch, payload);
    yield put(setAuthSuccessAction(data.data.data.access_token));
  } catch (e) {
    console.log(e.response.data);
    yield put(setAuthFailAction(e.response.data.errors));
    // setAuthFailAction(e.response.data.error.login);
  }
}

export function* loginWatcher() {
  yield takeEvery(AUTH_LOGIN, loginWorker);
}

function* checkAuthWorker() {
  try {
  } catch {}
}

export function* checkAuthWatcher() {
  yield takeEvery(AUTH_CHECK, checkAuthWorker);
}
