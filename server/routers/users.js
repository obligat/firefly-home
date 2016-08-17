import express from "express";
import User from "../models/User";

let router = express.Router();

router.get('/', (req, res)=> {
  console.log('request came ' + JSON.stringify(req.query.name));
  User.where({name: req.query.name}).findOne((err, user)=> {
    if(err)
      throw err;

    const exist = user ? true: false;
    
    console.log('send ' + JSON.stringify({exist:exist}));
    
    res.send({exist:exist});
  });
});

module.exports = router;
