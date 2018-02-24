// const sum = require('../index.js');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const mysql = require('mysql');
const request = require('request');

describe('app server', () => {
	var db;

	beforeEach(() => {
		db = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: ''
		});
		db.connect();
	});

	afterEach(() => {
		db.end();
	})

	test('basic 2+2 test works', () => {
		expect(2).toEqual(2);
	});


	test('works with async get', () => {
		var id = '--DaPTJW3-tB1vP-PfdTEg';
		var url = 'http://localhost:3002/reviews/' + id;
		request({url: url}, (err, response, body) => {
			var result = JSON.parse(body);
			expect(result.length).toEqual(39);
			expect(result[0].business_id).toEqual('--DaPTJW3-tB1vP-PfdTEg')
			expect(result[0].city).toEqual('Toronto');
		});
	})

})