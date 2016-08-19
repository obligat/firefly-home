import {combineReducers} from 'redux';
import {createUserResult} from './register';
import {isExist} from './login';
import {loginMessage} from './login';

const rootReducer = combineReducers({
  createUserResult,
  isExist,
  loginMessage
});

export default rootReducer;



