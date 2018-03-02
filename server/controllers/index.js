const model = require('../models/index.js');

const _sendError = (res, err) => {
	res.status(500).send(err);
}

// var details = {
// 	count: {
// 		overall
// 		5
// 		4
// 		3
// 		2
// 		1
// 	},
// 	ratings: {
// 		overall
// 		food
// 		service
// 		ambience
// 		value
// 	},
// 	noise: #,
// 	recommend: #
// }

const _getDetails = (restaurant, reviews) => {
	var details = {
		review_count: {
			overall: restaurant.review_count,
			5: 0,
			4: 0,
			3: 0,
			2: 0,
			1: 0
		},
		ratings: {
			overall: restaurant.stars
		}
	}
	reviews.forEach(review => {
		details.review_count[review.stars]++;
	})
	return details;
}

module.exports = {

	get: (req, res) => {
		const iterator = req.params.iterator;

		if (iterator < 1 || iterator > 267) {
			_sendError(res, 'iterator out of range');
		} else {

			model.ratings.get(iterator, (err, detailsResult) => {
				if (err) {
					_sendError(res, err);
				} else {
					const restaurant = detailsResult[0];

					model.reviews.get(restaurant.id, (err, reviewsResult) => {
						if (err) {
							_sendError(res, err);
						} else {
							// send back restaurant details and reviews to client
							
							var details = _getDetails(restaurant, reviewsResult);
							var result = {
								details: details,
								reviews: reviewsResult
							};
							res.status(200).json(result);
						}
					})
				}
			});

		}
		
	}
}