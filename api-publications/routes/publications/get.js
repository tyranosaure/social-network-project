const { getPublications } = require("../../db/select/publications")

module.exports = function (app, client) {
	app.get("/publications/:limit/:offset", (req, res) => {
		getPublications(client, req, res)
		client.end
	})
}
