import {combineReducers} from 'redux';
import {createUserResult} from './register';
import {isExist} from './login';
import {loginMessage} from './login';
import {houseResource} from  './houseResource';

const rootReducer = combineReducers({
  createUserResult,
  isExist,
  loginMessage,
  houseResource
});

export default rootReducer;



