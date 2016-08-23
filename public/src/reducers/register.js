
export const createUserResult = (state = false, action)=> {
  switch (action.type) {
  case 'ADD_USER':
    return action.message;
  case 'RESET_REGISTER':
    return false;
  default:
    return state;
  }
};
