import * as types from '../constants/ActionTypes';

export function submitItem(itemData, listId) {
  return {
    type: types.SUBMIT_ITEM,
    payload: {
      itemData: itemData,
      listId: listId
    }
  }
}
