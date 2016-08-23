import request from 'superagent';

export const addUser = (error)=>({
  type: 'ADD_USER',
  message: error
});

export const clearState = () => ({
  type: 'RESET_REGISTER'
});

export const createUser = (username, password)=> {
  return (dispatch)=> {
    request
      .post('/api/users/register')
      .type('form')
      .send({
        username: username,
        password: password
      })
      .end((err, res)=> {
        if (err) {
          throw err;
        } else {
          dispatch(addUser(res.body.error));
        }
      });

  };
};
