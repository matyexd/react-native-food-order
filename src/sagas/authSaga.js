import {call, put, takeEvery} from 'redux-saga/effects';
import {AUTH_CHECK, AUTH_LOGIN} from '../store/types/authTypes';
import {
  checkLogin,
  checkLoginFail,
  checkLoginSuccess,
  setAuthFailAction,
  setAuthSuccessAction,
} from '../store/actions/authAction';
import {checkAuthFetch, loginFetch} from '../http/authUserService';

function* loginWorker({payload}) {
  try {
    const data = yield call(loginFetch, payload);
    yield put(setAuthSuccessAction(data.data.data.access_token));
  } catch (e) {
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
    console.log();
    yield put(checkLoginFail(e.response.data.errors));
  }
}

export function* checkAuthWatcher() {
  yield takeEvery(AUTH_CHECK, checkAuthWorker);
}
