const { deleteComment } = require("../../db/delete/comments")

module.exports = function (app, client) {
	app.delete("/comments", (req, res) => {
		deletePublications(client, req, res)
		client.end
	})
}
