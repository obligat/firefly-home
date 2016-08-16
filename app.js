import express from 'express';
import bodyParser from 'body-parser';
import regRouters from './server/routers';

const app = express();

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use(express.static(__dirname + 'public'));


regRouters(app);


app.get('/', (req, res) => {
  console.log('request came');
  res.send('Welcome, this is firefly-home');
});





app.listen(3000, ()=> {
  console.log('Server start at http://localhost:3000'); // eslint-disable-line no-console
});

export default app;