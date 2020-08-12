exports.getItemByName = first =>
	db.query(`SELECT * FROM items WHERE item = $1`, [first]);

exports.getItemsByUserId = userId =>
	db.query(`SELECT * FROM items WHERE user_id = $1`, [userId]);

exports.setItem = (item, userId) =>
	db.query(`INSERT INTO items (item, user_id) VALUES ($1, $2)`, [item, userId]);
