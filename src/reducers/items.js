import * as types from '../constants/ActionTypes';
import storeWhiteboard from '../storeWhiteboard';

const initialState = storeWhiteboard.entities.item;

export default function items(items=initialState, action) {
  switch(action.type) {
    case types.SUBMIT_ITEM: {
      const item = action.payload;
      return [...items, item];
    }

    default:
      return items;
  }
}
