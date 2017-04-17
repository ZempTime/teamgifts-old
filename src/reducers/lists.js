import * as types from '../constants/ActionTypes';

export default function lists(state={}, action) {
  switch(action.type) {
    case types.LOAD_LIST_SUCCESS: {
      return Object.assign({}, action.payload.list.lists);
    }

    default:
      return state;
  }
}

