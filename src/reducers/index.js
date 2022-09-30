import { combineReducers } from 'redux';
import dialpad from './dialpad';
import ip from './ip';

export default combineReducers({
  dialpad,
  ip,
});
