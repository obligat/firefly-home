import mongoose from 'mongoose';
import rawData from './fixture/raw-data';
import User from '../models/User';
import House from '../models/House';
import dbUrl from '../../db-config';

const modelsMap = {
  User,
  House
};


export  default  function refresh(done) {
  let docs = Object.keys(rawData);

  // mongoose.connect(dbUrl);
  // const db = mongoose.createConnection(dbUrl);

  Object.keys(rawData)
    .forEach(v => {
      modelsMap[v].remove(()=> {
        modelsMap[v].create(rawData[v], ()=> {
          docs = docs.filter(doc => doc !== v);
          console.log(`The data of ${v} created`); // eslint-disable-line no-console
          if (docs.length === 0) {
            console.log('All data refreshed'); // eslint-disable-line no-console
            // db.close(()=>{
            //   console.log('close');})
            // mongoose.disconnect(()=>{console.log('disconnect')});
            done();
            // process.exit(0);
          }
        });
      });
    });


}

