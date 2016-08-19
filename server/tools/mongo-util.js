import rawData from './fixture/raw-data';
import User from '../models/User';
import House from '../models/House';

const modelsMap = {
  User,
  House
};


export  default  function refresh() {
  let docs = Object.keys(rawData);

  Object.keys(rawData)
    .forEach(v => {
      modelsMap[v].remove(()=> {
        modelsMap[v].create(rawData[v], ()=> {
          docs = docs.filter(doc => doc !== v);
          console.log(`The data of ${v} created`); // eslint-disable-line no-console
          if (docs.length === 0) {
            console.log('All data refreshed'); // eslint-disable-line no-console
          }
        });
      });
    });


}

