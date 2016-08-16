import express from 'express';
import {checkUsername} from './public/src/register/register';
import {checkPassword} from './public/src/register/register';

const app = express();

app.get('/user', (req, res) => {
    res.send(checkUsername(req.query.username));
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
    console.log('Server start at http://localhost:3000');
});

module.exports = app;