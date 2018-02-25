var mysql = require('mysql');

var db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: ''
});

db.connect(err => {
	if (err) throw err;
	console.log('connected to mysql db!');
});

db.query('use yelp_db');

var get = (id, callback) => {

	var queryString = 'select * from business \
	inner join review on review.business_id = business.id \
	inner join user on user.id = review.user_id \
	where business.id = \'' + id + '\'';

	db.query(queryString, callback);
}


module.exports = {
	get: get 
}