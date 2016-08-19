/**
 * Created by fcc on 16-8-18.
 */

import express from 'express';
import House from '../models/House';

let router = express.Router();

router.get('/', (req, res)=> {
  House.find((err, house)=> {
    if (err) {
      throw err;
    } else {
      res.send(house);
    }
  });
})
;

module.exports = router;
