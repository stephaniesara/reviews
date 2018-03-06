const express = require('express');
const Promise = require('bluebird');
const controller = require('./controllers');
const port = 3002;

const app = express();

app.use(express.static('client/dist'));

app.get('/reviews/:iterator', controller.get);

app.listen(port, () => {
	console.log(`reviews server running at: http://localhost:${port}`);
})