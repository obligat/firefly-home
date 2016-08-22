import express from  'express';
import User from '../models/User';

let router = express.Router();
router.post('/register', (req, res)=> {
  let username = req.body.username;
  let password = req.body.password;
  const checkUsername = (username) => {
    return (/^[A-Za-z0-9_|0-9A-Za-z_]+$/).test(username);
  };

  const checkPassword = (password) => {
    return (/^.{6,16}$/).test(password);
  };

  if (checkUsername(username) && checkPassword(password)) {

    User.where({username: req.body.username}).findOne((err, user) => {

      if (err) {
        throw err;
      } else {
        user ?
          res.send({error: '用户名已注册'}) :
          new User({
            username: req.body.username,
            password: req.body.password
          }
          ).save((err, user)=> { // eslint-disable-line no-unused-vars
            if (err) {
              throw  err;
            } else {
              res.send({error: ''});
            }
          });
      }
    });
  }

});


router.get('/', (req, res)=> {

  User
    .where({username: req.query.username})
    .findOne((err, user)=> {
      if (err)
        throw err;
      let status = 0;
      let exist = false;
      user
        ? (status = 200, exist = true)
        : (status = 401, exist = false);
      res.status(status).send({exist});
    });
});

router.get('/validation', (req, res)=> {
  const username = req.query.username;
  const password = req.query.password;

  if (!(username && password)) {
    return res.status(401).send({error: true, message: '用户名及密码不能为空'});
  }

  User.where({username: username}).findOne((err, user)=> { // eslint-disable-line  complexity
    if (err)
      throw err;

    let status = '';
    let error = '';
    let message = '';

    if (user) {
      if (user.password === password) {
        status = 200;
        error = false;
      } else {
        status = 401;
        error = true;
        message = '密码错误';
      }
    }
    else {
      status = 401;
      error = true;
      message = '用户不存在';
    }

    res.status(status).send({error: error, message: message});
  });
});

module.exports = router;
