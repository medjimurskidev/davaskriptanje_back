const Sequelize = require('sequelize');

module.exports = new Sequelize(
	{
		database: 'gametracker',
		username: 'root',
		host: 'localhost',
		dialect: "mysql",
		password: ""
	})