import {put, take, takeEvery, call} from 'redux-saga/effects';
import {categoriesFetch} from '../http/menuService';
import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAILED,
  GET_CATEGORIES_SUCCEED,
} from '../store/types/menuTypes';

export function* fetchCategories(args) {
  try {
    const data = yield call(categoriesFetch);
    yield put({type: GET_CATEGORIES_SUCCEED, payload: data});
  } catch {
    yield put({type: GET_CATEGORIES_FAILED});
  }
}

export function* categoriesWatcher() {
  yield takeEvery(GET_CATEGORIES, fetchCategories);
}
