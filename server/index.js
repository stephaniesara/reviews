const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Promise = require('bluebird');
// const model = require('./models/index.js')
const controller = require('./controllers');
const fs = require('fs');

app.use(express.static('client/dist'));

var sendError = (res, err) => {
	res.status(500).send(err);
}

app.get('/reviews/:id', controller.get);

app.listen(3002, () => {
	console.log('Listening on port 3002');
})