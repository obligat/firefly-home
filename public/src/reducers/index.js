import {combineReducers} from 'redux';
import {createUserResult} from './register';
import {isExist} from './login';
import {loginMessage} from './login';
import {houseResource} from './houseResource';
import {houseDetails} from './houseDetails';

const rootReducer = combineReducers({
  createUserResult,
  isExist,
  loginMessage,
  houseResource,
  houseDetails
});

export default rootReducer;



