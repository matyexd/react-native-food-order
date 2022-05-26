import {call, put, takeEvery} from 'redux-saga/effects';
import {AUTH_CHECK, AUTH_LOGIN} from '../store/types/authTypes';
import {
  checkLogin,
  checkLoginFail,
  loginFetch,
  checkLoginSuccess,
  setAuthFailAction,
  setAuthSuccessAction,
  checkAuthFetch,
} from '../store/actions/authAction';

function* loginWorker({payload}) {
  try {
    const data = yield call(loginFetch, payload);
    console.log(data);
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
    const data = yield call(checkAuthFetch);
    yield put(checkLoginSuccess(data.data));
  } catch (e) {
    yield put(checkLoginFail(e.response.data.errors));
  }
}

export function* checkAuthWatcher() {
  yield takeEvery(AUTH_CHECK, checkAuthWorker);
}
