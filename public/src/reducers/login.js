import {combineReducers} from 'redux';


const isExist = (state = true, action) => {
  switch (action.type) {
    case 'USER_EXIST':
      return action.exist;
    default:
      return state;
  }
};

const isCorrectPassword = (state = true, action) => {
  switch (action.type) {
    case 'PASSWORD_CORRECT':
      return action.exist;
    default:
      return state;
  }
};



const rootReducer = combineReducers({
  isExist,
  isCorrectPassword
});

export default rootReducer;




