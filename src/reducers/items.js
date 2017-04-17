import * as types from '../constants/ActionTypes';

export default function items(items={}, action) {
  switch(action.type) {
    case types.SUBMIT_ITEM: {
      const item = action.payload.itemData;
      const id = Object.keys(items).length;
      item["id"] = id;

      return [...items, {id: item}];
    }

    default:
      return items;
  }
}
