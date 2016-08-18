import mongoose from 'mongoose';
import rawData from './fixture/raw-data';
import User from '../models/User';
import dbUrl from '../../db-config';
// import your models from ../models

const modelsMap = {
  User
};

let docs = Object.keys(rawData);

mongoose.connect(dbUrl);


Object.keys(rawData)
  .forEach(v => {
    modelsMap[v].remove(()=> {
      modelsMap[v].create(rawData[v], ()=> {
        docs = docs.filter(doc => doc !== v);
        if (docs.length === 0) {
          process.exit(0);
        }
      });
    });
  });

