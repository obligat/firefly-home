import superAgent from 'superagent';

export const isExistName = (username)=> {
  return (dispatch)=> {
    superAgent
      .get('/api/users')
      .query({username: username})
      .end((err, res)=> {
        if (err) return err;
        dispatch(userExist(res.body.exist));
      });
  };
};

export const userExist = (exist)=> {
  return {
    type: 'USER_EXIST',
    exist
  };
};

export const checkPassword = (username, password)=>{
  return (dispatch)=>{
    
    superAgent
      .post('/api/users/validation')
      .type('form')
      .send({username:username,password:password})
      .end((err,res)=>{

        if(err){
          throw err;
        }else {
          dispatch(isCorrectPassword(res.body));
        }
      });
  };
};

export const isCorrectPassword = (data)=>{
  return {
    type:'PASSWORD_CORRECT',
    data
  };
};
