import superAgent from "superagent";

export const isExistName = (name)=> {
  return (dispatch)=> {
    superAgent
      .get('/users')
      .query({name: name})
      .end((err, res)=> {
        console.log(res.body.exist);

        if (err) console.log(err);
        dispatch(userExist(res.body.exist));
      });
  }
};

export const userExist = (exist)=> {
  return {
    type: 'USER_EXIST',
    exist
  }
};

export const isExistPassword = (userName, password)=>{
  return (dispatch)=>{

    superAgent
      .get('/users/validation')
      .query({userName:userName,password:password})
      .end((err,res)=>{
        if(err){
          console.log(err)
        }else {
          dispatch(passwordExist(res.body.exist));
        }
      });
  }
};

export const passwordExist = (exist)=>{
  return {
    type:'PASSWORD_CORRECT',
    exist
  }
};
