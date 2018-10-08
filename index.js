const express = require('express');

const Config = require('./config');
const Content = require('./content');

const app = express();
const { defaultLang } = Config;

app.get('/', (req, res) => {
  res.send(Content.quotes[0].title[defaultLang]);
});

app.listen(
  3000,
  () => console.log('KrumplisHal is listening on localhost:3000')
);