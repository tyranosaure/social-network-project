const { Client } = require("pg")

const client = new Client({
	host: "51.159.24.214",
	user: "marbotylebossdelabdd",
	port: 1074,
	password: "MartyBDD1!",
	database: "rdb",
})

module.exports = client
