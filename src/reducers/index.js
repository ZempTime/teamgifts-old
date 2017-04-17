import { combineReducers } from 'redux';
import lists from '../reducers/lists';
import items from '../reducers/items';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  lists: lists,
  items: items,
  form: formReducer
});

export default rootReducer;
