'use strict';
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
    User.where({username: username}).findOne((err, user) => {
      let status = 0;
      if (err) status = 500;

      if (user) {
        status = 403;
        return res.status(status).send({});

      } else {
        new User({username: username, password: password})
          .save((err, result) => {   // eslint-disable-line  no-unused-vars
            if (err) status = 500;
            else status = 200;
            return res.status(status).send({});
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
      // console.log('------------------------------check---------------------------status : ' + status);
      res.status(status).send({exist});
    });
});

router.post('/validation', (req, res)=> {
  const username = req.body.username;
  const password = req.body.password;

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
    // console.log('-------------------------validation--------------------------------status : ' + status);

    return res.status(status).send({error: error, message: message});
  });
});

module.exports = router;
