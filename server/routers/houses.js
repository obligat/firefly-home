/**
 * Created by fcc on 16-8-18.
 */

import express from 'express';
import House from '../models/House';

let router = express.Router();

router.get('/', (req, res)=> {
  House.find((err, houses)=> {
    if (err) {
      throw err;
    } else {

      const result = houses.map((house)=> {
        return {
          name: house.name,
          price: house.price,
          address: house.address,
          province: house.province,
          type: house.type,
          image: house.image
        };
      });

      res.send(result);
    }
  });
})
;

module.exports = router;
