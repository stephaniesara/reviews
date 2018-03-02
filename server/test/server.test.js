// const sum = require('../index.js');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const request = require('request');

describe('app server', () => {

	test('works with async get valid input', () => {
		var iterator = 15;
		var url = 'http://localhost:3002/reviews/' + iterator;
		request(url, (err, response, body) => {
			var result = JSON.parse(body);
			expect(result.ratings.iterator).toEqual(15);
			expect(result.ratings.id).toEqual('2xw-Ksu9b2jDYlZaApXcBA');
			expect(result.reviews.length).toEqual(146);
			expect(result.reviews[0].stars).toEqual(4)
			expect(result.reviews[0].name).toEqual('Ryan');
			expect(result.reviews[0].text).toEqual('Had take out for lunch one day. Got the butter chicken with rice. There is a lot of food and each bite is heavy with flavour. After eating I was ready to fall asleep.');
		});
	})

	test('works with async get invalid input', () => {
		var iterator = '290'; // iterator out of range
		var url = 'http://localhost:3002/reviews/' + iterator;
		request(url, (err, response, body) => {
			expect(body).toBe('iterator out of range');
		});
	})

})