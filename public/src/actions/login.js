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
      .get('/api/users/validation')
      .query({username:username,password:password})
      .end((err,res)=>{

        if(err){
          //console.log(err);
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
