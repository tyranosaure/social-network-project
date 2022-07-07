const { postPublications } = require("../../db/insert/publications")

module.exports = function (app, client) {
	app.post("/publications", (req, res) => {
		postPublications(client, req, res)
	})
}
