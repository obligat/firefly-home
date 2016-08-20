
export const createUserResult = (state = false, action)=> {
  switch (action.type) {
  case 'ADD_USER':
    return action.message;
  default:
    return state;
  }
};

