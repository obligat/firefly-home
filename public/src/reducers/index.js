import {combineReducers} from 'redux';
import {createUserResult} from './register';
import {isExist} from './login';
import {loginMessage} from './login';
import {receiveHouseId} from './houseResource';
import {houseResource} from './houseResource';
import {houseDetails} from './houseDetails';

const rootReducer = combineReducers({
  createUserResult,
  isExist,
  loginMessage,
  receiveHouseId,
  houseResource,
  houseDetails
});

export default rootReducer;



