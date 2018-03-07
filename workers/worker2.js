var mysql = require('mysql');
var fs = require('fs');

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: ''
});

db.connect(err => {
	if (err) throw err;
	console.log('connected to mysql db!');
});

db.query('use open_source_table_reviews');

// query db for businesses matching iterators 1-267
var queryString = 'select id from details';
db.query(queryString, (err, result) => {
	if (err) throw err;
	fs.writeFile('ids.json', JSON.stringify(result), err => {
		if (err) throw err;
		console.log('data has been written to file ids.json');
	})
})