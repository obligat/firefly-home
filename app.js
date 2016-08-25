import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import regRouters from './server/routers';
import dbUrl from './db-config';

const app = express();

mongoose.connect(dbUrl);

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  console.log(req.method + '   ' + req.url);//eslint-disable-line no-console
  next();
});

regRouters(app);

if(!module.parent){
  app.listen(3000, ()=> {
    console.log('Server start at http://localhost:3000'); // eslint-disable-line no-console
  });
}
export default app;

