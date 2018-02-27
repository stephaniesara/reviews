const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Promise = require('bluebird');
const db = require('./db')
const fs = require('fs');

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
			// console.log(result);
			res.status(200).json(result);
			// fs.writeFile('data.json', JSON.stringify(result), err => {
			// 	if (err) {
			// 		sendError(res, err);
			// 	} else {
			// 		console.log('the file has been saved!');
			// 		res.status(200).json(result);
			// 	}
			// });
		}
	})
})

app.listen(3002, () => {
	console.log('Listening on port 3002');
})