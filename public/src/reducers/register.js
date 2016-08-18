import {combineReducers} from 'redux';

const createUserResult = (state = false, action)=> {
  switch (action.type) {
  case 'ADD_USER':
    return action.message;
  }
  return state;
};


const resultList = combineReducers({
  createUserResult
});

export default resultList;
