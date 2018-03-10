const express = require('express');
const morgan = require('morgan');
const path = require('path');
const controller = require('./controllers');
const port = process.env.PORT || 3002;

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/reviews/:iterator', controller.get);

app.listen(port, () => {
	console.log(`reviews server running at: http://localhost:${port}`);
})