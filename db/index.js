const db = require("./pg");

module.exports = Object.assign(
	{},
	{
		...require("./users"),
		...require("./items"),
	}
);
