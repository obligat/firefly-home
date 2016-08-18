import {combineReducers} from 'redux';

const isExist = (state = true, action) => {
  switch (action.type) {
  case 'USER_EXIST':
    return action.exist;
  default:
    return state;
  }
};


const rootReducer = combineReducers({
  isExist
});

export default rootReducer;



