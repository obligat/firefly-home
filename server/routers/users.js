/**
 * Created by afaren on 8/16/16.
 */

import express from 'express';


const router = express.Router();

router.get('/', (req, res) => {
  res.send('here is user');
});

module.exports = router;
