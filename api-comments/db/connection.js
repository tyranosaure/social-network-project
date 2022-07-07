require("dotenv").config()

module.exports.knex = require("knex")({
	client: "pg",
	connection: {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		port: process.env.DB_PORT,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
	},
})
