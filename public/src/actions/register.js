import request from 'superagent';

export const addUser = (error)=>({
  type: 'ADD_USER',
  message: error
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
          console.log('9999999999999')

          console.log(err);
        } else {
          dispatch(addUser(res.body.error));
        }
      });

  }
};
