import * as types from '../constants/ActionTypes';
import storeWhiteboard from '../storeWhiteboard';

const initialState = storeWhiteboard.entities.list;

export default function list(state=initialState, action) {
  switch(action.type) {
    case types.PLACEHOLDER_ACTION: {
      return state;
    }

    default:
      return state;
  }
}

