
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import grantReducer from './grantReducer';

export default combineReducers({
  auth: authReducer,
  grants: grantReducer,
});
