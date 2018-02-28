const model = require('../models/index.js')

const _sendError = (res, err) => {
	res.status(500).send(err);
}

module.exports = {

	get: (req, res) => {
		const iterator = req.params.iterator;

		if (iterator < 1 || iterator > 267) {
			_sendError(res, 'iterator out of range');
		} else {

			model.ratings.get(iterator, (err, ratingsResult) => {
				if (err) {
					_sendError(res, err);
				} else {
					var ratings = ratingsResult[0];
					model.reviews.get(ratings.id, (err, reviewsResult) => {
						if (err) {
							_sendError(res, err);
						} else {
							// send back restaurant details and reviews to client
							var result = {
								ratings: ratings,
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