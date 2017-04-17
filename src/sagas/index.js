import * as types from '../constants/ActionTypes';
import * as api from '../api/api';
import { call, put, takeEvery } from 'redux-saga/effects'
import { listSchema } from '../api/schema';
import { normalize } from 'normalizr';

function* loadList(action) {
  try {
    let list = yield call(api.loadList, action.payload.listId);
    const normalizedList = normalize(list, listSchema);
    yield put({type: types.LOAD_LIST_SUCCESS, payload: { list: normalizedList }});
  } catch (e) {
    yield put({type: types.LOAD_LIST_ERROR, message: e.message});
  }
}

function* rootSaga() {
  yield takeEvery(types.LOAD_LIST, loadList);
}

export default rootSaga;
