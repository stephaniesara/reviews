const model = require('../models/index.js');

const _sendError = (res, err) => {
	res.status(500).send(err);
}

const _getReviewCount = (restaurant, reviews) => {
	var review_count = {
		overall: restaurant.review_count,
		5: 0,
		4: 0,
		3: 0,
		2: 0,
		1: 0
	}
	reviews.forEach(review => {
		review_count[review.stars]++;
	})
	return review_count;
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
					// console.log(detailsResult);
					const details = detailsResult[0];

					model.reviews.get(details.id, (err, reviewsResult) => {
						if (err) {
							_sendError(res, err);
						} else {
							// send back restaurant details and reviews to client
							
							var review_count = _getReviewCount(details, reviewsResult);
							var result = {
								details: details,
								reviews: reviewsResult,
								review_count: review_count
							};
							res.status(200).json(result);
						}
					})
				}
			});

		}
		
	}
}