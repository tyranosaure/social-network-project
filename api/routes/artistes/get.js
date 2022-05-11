const { all, one } = require("../../db/select/artistes")

module.exports = function (app, client) {
	app.get("/artistes", (req, res) => {
		all(client, req, res)
		client.end
	})

	app.get("/artistes/:id", (req, res) => {
		one(client, req, res)
		client.end
	})
}
