import {combineReducers} from 'redux';


const isExist = (state = true, action) => {
  switch (action.type) {
    case 'USER_EXIST':
      return action.exist;
    default:
      return state;
  }
};

const loginMessage = (state = {}, action) => {
  switch (action.type) {
    case 'PASSWORD_CORRECT':
      return action.data

    default:
      return state;
  }
};



const rootReducer = combineReducers({
  isExist,
  loginMessage
});

export default rootReducer;




