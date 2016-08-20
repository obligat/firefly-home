
export const isExist = (state = true, action) => {
  switch (action.type) {
  case 'USER_EXIST':
    return action.exist;
  default:
    return state;
  }
};

export const loginMessage = (state = {error:true}, action) => {
  switch (action.type) {
  case 'PASSWORD_CORRECT':
    return action.data;
  default:
    return state;
  }
};