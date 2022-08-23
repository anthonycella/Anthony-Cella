const express = require('express');
const path = require('path');
// eslint-disable-next-line no-unused-vars
const db = require('../db/index');
const controllers = require('./controllers/controllers');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = 3000;

app.listen(PORT);
console.log('Server listening at http://localhost:3000');