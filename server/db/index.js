var mysql = require('mysql');

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '' // TODO: Update with your MySQL password
});

db.connect(err => {
	if (err) throw err;
	const dbName = 'open_source_table_reviews';
	console.log('connected to mysql db and using db', dbName);
	db.query('use ' + dbName);
});

module.exports = db;