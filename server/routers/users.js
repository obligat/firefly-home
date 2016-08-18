import express from 'express';
import User from '../models/User';

let router = express.Router();

router.get('/', (req, res)=> {
  User.where({username: req.query.username}).findOne((err, user)=> {
    if (err)
      throw err;

    const exist = user ? true : false;
    res.send({exist: exist});
  });
});

router.get('/validation', (req, res)=> {
  User.where({username: req.query.username}).findOne((err, user)=> {
    if (err)
      throw err;

    if (user) {
      if (user.password === req.query.password) {
        res.send({error: false});
      } else {
        res.send({error: true, message: '密码错误'});
      }
    }
    else {
      res.send({error: true, message: '用户不存在'});
    }

  });
});

module.exports = router;
