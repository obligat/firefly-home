/**
 * Created by fcc on 16-8-18.
 */

import express from 'express';
import House from '../models/House';

let router = express.Router();

function returnValue(houses) {
  return houses.map((house)=> {
    return {
      id: house._id,
      name: house.name,
      price: house.price,
      address: house.address,
      city: house.city,
      type: house.type,
      image: house.image
    };
  });
}

router.get('/', (req, res)=> {
  House.find((err, houses)=> {
    if (err) {
      return res.sendStatus(500);
    } else {
      res.send(returnValue(houses));
    }
  });
});

router.get('/city', (req, res)=> {
  House
    .where({city: req.query.city})
    .find((err, houses)=> {
      if (err)
        return res.sendStatus(500);
      else {
        res.send(returnValue(houses));
      }
    });
});

router.get('/sorted-house', (req, res)=> {

  let rule = req.query.sort;

  House.where({city: req.query.city})
    .find((err, houses)=> {
      if (err) {
        return res.sendStatus(500);
      } else {
        const result = returnValue(houses).sort((a, b)=> a[rule] > b[rule]);
        res.send(result);
      }

    });
});

module.exports = router;
