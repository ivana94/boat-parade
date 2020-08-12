const db = require("./pg");

exports.getUserByName = first =>
	db.query(`SELECT * FROM users WHERE first = $1`, [first]);

exports.setUser = first =>
	db.query(`INSERT INTO users (first) VALUES ($1)`, [first]);
