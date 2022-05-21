import {put, take, takeEvery, call} from 'redux-saga/effects';
import {categoriesFetch, menuFetch} from '../http/menuService';
import {
  GET_CATEGORIES,
  GET_CATEGORIES_FAILED,
  GET_CATEGORIES_SUCCEED,
  GET_MENU,
  GET_MENU_FAILED,
  GET_MENU_SUCCEED,
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

export function* fetchMenu(args) {
  try {
    const data = yield call(menuFetch, args);
    yield put({type: GET_MENU_SUCCEED, payload: data});
  } catch {
    yield put({type: GET_MENU_FAILED});
  }
}
export function* menuWatcher() {
  yield takeEvery(GET_MENU, fetchMenu);
}
