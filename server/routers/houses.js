/**
 * Created by fcc on 16-8-18.
 */

import express from 'express';
import House from '../models/House';

let router = express.Router();

router.get('/', (req, res)=> {
  House.find((err, houses)=> {
    if (err) {
      return res.sendStatus(500);
    } else {
      const result = houses.map((house)=> {
        return {
          name: house.name,
          price: house.price,
          address: house.address,
          city: house.city,
          type: house.type,
          image: house.image
        };
      });

      res.send(result);
    }
  });
});

router.get('/:city', (req, res)=> {
console.log(req.params.city);
  House
    .where({city: req.params.city})
    .findOne((err, houses)=> {
      if (err)
        return res.sendStatus(500);
      else {
        /*const result = houses.map((house)=> {
          return {
            name: house.name,
            price: house.price,
            address: house.address,
            city: house.city,
            type: house.type,
            image: house.image
          };
        }).sort((a, b)=>a.image > b.image);
*/
        res.send(houses);
      }
    });
});
module.exports = router;
