import express from 'express';

const app = express();


app.get('/', (req, res) => {
  console.log('request came');
  res.send('Welcome, this is firefly-home');
});





app.listen(3000, ()=> {
  console.log('Server start at http://localhost:3000');
});
