var mysql = require('mysql');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: ''
});

con.connect(function(err) {
	if (err) throw err;
	console.log('connected!');
})

con.query('use yelp_db');
// con.query('create database yelp_reviews');


var business_id = '--DaPTJW3-tB1vP-PfdTEg';


var getAll = (business_id, callback) => {
	var result = {};
	var queryString = 'select * from business inner join review on review.business_id = business.id inner join user on user.id = review.user_id where business.id = \'' + business_id + '\'';
	con.query(queryString, callback);
}

getAll(business_id, (err, result) => {
	if (err) throw err;
	console.log(result.length);
	console.log(Array.isArray(result));
	console.log(result[0].business_id);
});

// var getBusinessDetails = (business_id, callback) => {
// 	var queryString = 'select * from business where id = \'' + business_id + '\'';
// 	con.query(queryString, callback);
// }

// var getReviews = (business_id, callback) => {
// 	var queryString = 'select * from review where business_id = \'' + business_id + '\'';
// 	con.query(queryString, callback)
// }


// var getUser = (user_id) => {
// 	var queryString = 'select * from user where user_id = \'' + user_id + '\'';
// }

// getBusinessDetails(business_id, (err, businessDetails) => {
// 	if (err) throw err;
// })

// var getReviewsAndUsers = (business_id, callback) => {
// 	var queryString = 'select * from review inner join user where user.id = review.user_id and review.business_id = \'' + business_id + '\'';
// 	con.query(queryString, callback);
// }


// getReviewsAndUsers(business_id, (err, result) => {
// 	if (err) throw err;
// 	// console.log(result);
// });




// var getAll = (business_id, callback) => {
// 	var result = {};
// 	getBusinessDetails(business_id, (err, businessDetails) => {
// 		if (err) {
// 			callback(err, null);
// 			return;
// 		}
// 		result.business_id = business_id;
// 		result.business_name = businessDetails[0].name;
// 		result.business_stars = businessDetails[0].stars;
// 		result.business_review_count = businessDetails[0].review_count;
// 		callback(null, result);
// 	})
// }

// getAll(business_id, (err, result) => {
// 	if (err) throw err;
// 	console.log(result);
// });

// var reviews = [];

// var queryString = 'select * from business where city = \'toronto\' limit 200';
// con.query(queryString, (err, businesses) => {
// 	if (err) throw err;
// 	// console.log(result);
// 	businesses.forEach(business => {
// 		// console.log(business.name, business.review_count);
// 		queryString = 'select * from review where business_id = \'' + business.id + '\' and stars = 3';
// 		// console.log(queryString);
// 		con.query(queryString, (err, reviews) => {

// 			// console.log(reviews);
			
// 			reviews.forEach(review => {
// 				// console.log(review.user_id);
// 				queryString = 'select name from user where id = \'' + review.user_id + '\'';
// 				// // console.log(queryString);

// 				con.query(queryString, (err, user) => {
// 					console.log('REVIEW *****************');
// 					console.log('user', user.name);
// 					console.log('business id', review.business_id);
// 					console.log('business name', business.name);
// 				});

// 			})

// 		})


// 	})
// })

