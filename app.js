import express from 'express';
<<<<<<< HEAD
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
=======
import {checkUsername} from './public/src/register/register';
import {checkPassword} from './public/src/register/register';

const app = express();

app.get('/user', (req, res) => {
    res.send(checkUsername(req.query.username));
>>>>>>> dev
});

app.post('/user/:password', (req, res) => {
    res.send(checkPassword(req.q.password));
});

app.post('/user/password/:password', (req, res) => {
    res.send(checkPassword(req.params.password));
});

app.post('/register', (req, res) => {
    res.send();
});


app.listen(3000, ()=> {
<<<<<<< HEAD
  console.log('Server start at http://localhost:3000'); // eslint-disable-line no-console
});

export default app;
=======
    console.log('Server start at http://localhost:3000');
});

module.exports = app;
>>>>>>> dev
