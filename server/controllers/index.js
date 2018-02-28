const model = require('../models/index.js')

module.exports = {

	get: (req, res) => {
		const id = req.params.id;

			// query db for reviews for restaurant with this ID
		model.get(id, (err, result) => {
			if (err) {
				sendError(res, err);
			} else {
				// send back reviews to client
				res.status(200).json(result);
			}
		})
		
	}
}