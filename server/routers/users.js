import express from "express";
import User from "../models/User";

let router = express.Router();

router.get('/', (req, res)=> {
  console.log('request came ' + JSON.stringify(req.query.username));
  User.where({username: req.query.username}).findOne((err, user)=> {
    if (err)
      throw err;

    const exist = user ? true : false;

    console.log('send ' + JSON.stringify({exist: exist}));

    res.send({exist: exist});
  });
});

router.get('/validation', (req, res)=> {
  console.log('request came ' + JSON.stringify(req.query.username) +
    JSON.stringify(req.query.password));

  User.where({username: req.query.username}).findOne((err, user)=> {
    if (err)
      throw err;
    console.log('lksdjflkjskldjflksjlkdfjlksdjflkj');

    console.log('here is user: ' + JSON.stringify(user));


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
