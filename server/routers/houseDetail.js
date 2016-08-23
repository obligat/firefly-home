/**
 * Created by zhangsha on 16-8-22.
 */
import express from 'express';
import House from '../models/House';

let router = express.Router();

router.get('/:id', (req, res) => {
  House
    .where({_id: req.params.id})
    .findOne((err, house) => {
      if(err){
        return res.sendStatus(500);
      }else{
        res.send(house);
      }
    });
});

module.exports = router;