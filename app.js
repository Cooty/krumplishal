const express = require('express');
// import environmental variables from our variables.env file
require('dotenv').config({ path: './variables.env' });
const Content = require('./content');

const app = express();

app.disable('x-powered-by');

app.get('/content', (req, res) => {
  return res.json(Content);
});

console.log(process.env.PORT);

app.listen(
  process.env.PORT,
  () => console.log(`KrumplisHal is listening on localhost:${process.env.PORT}`)
);