import { combineReducers } from 'redux';
import list from '../reducers/list';
import items from '../reducers/items';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  list: list,
  items: items,
  form: formReducer
});

export default rootReducer;
