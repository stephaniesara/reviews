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

// query db for users matching reviews matching businesses matching iterators 1-267
var queryString = 'select * from yelp_db.user where id in (select user_id from yelp_db.review where business_id in (select id from open_source_table_reviews.details));';
db.query(queryString, (err, result) => {
	if (err) throw err;
	fs.writeFile('users.json', JSON.stringify(result), err => {
		if (err) throw err;
		console.log('data has been written to file users.json');
		db.end();
	})
})