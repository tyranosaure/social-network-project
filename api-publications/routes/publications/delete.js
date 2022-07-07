const { deletePublications } = require("../../db/delete/publications")

module.exports = function (app, client) {
	app.delete("/publications", (req, res) => {
		deletePublications(client, req, res)
	})
}
