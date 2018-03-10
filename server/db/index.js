const mysql = require('mysql');
const dbconfig = require('../../opsworks.js');

// var db = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '' // TODO: Update with your MySQL password
// });

var db = mysql.createConnection({
	host: dbconfig.host,
	user: dbconfig.user,
	password: dbconfig.password,
	port: dbconfig.port,
	database: dbconfig.database
});

db.connect(err => {
	if (err) throw err;
	console.log('connected to mysql db', dbconfig.database);
});

module.exports = db;