const express = require('express');
const Promise = require('bluebird');
const controller = require('./controllers');

const app = express();

app.use(express.static('client/dist'));

app.get('/reviews/:iterator', controller.get);

app.listen(3002, () => {
	console.log('Listening on port 3002');
})