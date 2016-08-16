import mongoose from 'mongoose';
import rawData from './fixture/raw-data';

// import your models from ../models
import Todo from  '../models/Todo';

const modelsMap = {
  // put models here
  Todo
};

let docs = Object.keys(rawData);

const database = 'test'; // modify 'test' to be your database name
mongoose.connect(`mongodb://localhost/${database}`);


Object.keys(rawData)
  .forEach(v => {
    modelsMap[v].remove(()=> {
      modelsMap[v].create(rawData[v], ()=> {
        docs = docs.filter(doc => doc !== v);
        console.log(`The data of ${v} created`);
        if (docs.length === 0) {
          console.log(`All data refreshed`);
          process.exit(0);
        }
      });
    });
  });

