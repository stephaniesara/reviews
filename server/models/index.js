const db = require('../db');

module.exports = {

	get: (id, callback) => {
		const props = {
			'review.stars': 'stars',
			'review.date': 'date',
			'review.text': 'text',
			'user.name': 'name'
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

}