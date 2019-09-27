const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/error-handlers');

require('dotenv').config({path: './variables.env'});

const app = express();

app.disable('x-powered-by');

app.use(express.static(path.join(__dirname, 'media')));

app.use('/', routes);

app.use(errorHandlers.notFound);

const errorHandler = app.get('env') === 'dev' ? errorHandlers.developmentErrors : errorHandlers.productionErrors;

app.use(errorHandler);

app.listen(
    process.env.PORT,
    () => console.log(`KrumplisHal is listening on localhost:${process.env.PORT}`)
);