import * as types from '../constants/ActionTypes';

export function loadList(id) {
  return {
    type: types.LOAD_LIST,
    payload: { listId: id }
  }
}

export function normalizeList(rawList) {
  return {
    type: types.NORMALIZE_LIST,
    payload: { data: rawList }
  }
}
