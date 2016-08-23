
export const createUserResult = (state = false, action)=> {
  console.log(action.message);
  switch (action.type) {
  case 'ADD_USER':
    return action.message;
  case 'RESET_REGISTER':
    return false;
  default:
    return state;
  }
};
