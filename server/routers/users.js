import express from  'express';
import User from '../models/User';

let router = express.Router();

router.post('/register', (req, res)=> {
  User.where({username: req.body.username}).findOne((err, user) => {
    if (err) {
      throw err;
    } else {
      user ?
        res.send({error: '用户已存在'}) :
        new User({
          username: req.body.username,
          password: req.body.password
        }
        ).save((err, user)=> {
          if (err) {
            throw  err;
          }
          else {
            res.send({error: ''});
          }
        });
    }
  });

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
        : (status = 404, exist = false);
      res.status(status).send({exist});
    });
});

router.get('/validation', (req, res)=> {
  const username = req.query.username;
  const password = req.query.password;

  if (!(username && password)) {
    return res.status(404).send({error: true, message: '用户名及密码不能为空'});
  }

  User.where({username: username}).findOne((err, user)=> {
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
        status = 404;
        error = true;
        message = '密码错误';
      }
    }
    else {
      status = 404;
      error = true;
      message = '用户不存在';
    }

    res.status(status).send({error: error, message: message});
  });
});

module.exports = router;
