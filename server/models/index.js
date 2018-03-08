const db = require('../db');

module.exports = {
	ratings: {
		get: (iterator, callback) => {
			const queryString = 'select * from details where iterator = \'' + iterator + '\'';
			db.query(queryString, callback);
		}
	},

	reviews: {
		get: (id, callback) => {
			const props = {
				'reviews.stars': 'stars',
				'reviews.date': 'date',
				'reviews.text': 'text',
				'users.name': 'name'
			}

			var queryString = 'select ';
			var str = [];
			for (var key in props) {
				str.push(key + ' as ' + props[key]);
			}
			queryString += str.join(', ');
			queryString += ' from details, users, reviews \
			where reviews.business_id = details.id \
			and users.id = reviews.user_id \
			and details.id = \'' + id + '\' order by reviews.date desc';

			db.query(queryString, callback);
		}
		
	}


}