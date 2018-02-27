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

	var props = {
		'business.id': 'b_id',
		'business.name': 'b_name',
		'business.stars': 'b_stars',
		'business.review_count': 'b_review_count',
		'review.stars': 'r_stars',
		'review.date': 'r_date',
		'review.text': 'r_text',
		'user.name': 'u_name'
	}

	var queryString = 'select ';
	var str = [];
	for (var key in props) {
		str.push(key + ' as ' + props[key]);
	}
	queryString += str.join(', ');
	queryString += ' from business, user, review \
	where review.business_id = business.id \
	and user.id = review.user_id \
	and business.id = \'' + id + '\' order by review.date desc';

	db.query(queryString, callback);
}


module.exports = {
	get: get 
}