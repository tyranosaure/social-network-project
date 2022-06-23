const { getPublications, getPublicationsForPagination } = require("../../db/select/publications")

module.exports = function (app, client) {
	app.get("/publications/:limit/:offset", (req, res) => {
		getPublicationsForPagination(client, req, res)
		client.end
	})


	app.get("/publications", (req, res) => {
		getPublications(client, req, res)
		client.end
	})
}
