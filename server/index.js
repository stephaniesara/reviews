const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const db = require('./db')

app.use(express.static('client/dist'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))

var sendError = (res, err) => {
	res.status(500).send(err);
}

app.get('/reviews/:id', (req, res) => {
	var id = req.params.id;
	db.get(id, (err, result) => {
		if (err) {
			sendError(res, err);
		} else {
			res.json(result);
		}
	})
})

app.listen(3002, () => {
	console.log('Listening on port 3002');
})