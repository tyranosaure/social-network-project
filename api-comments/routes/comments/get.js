const { getComments, getTotalComments } = require("../../db/select/comments")

module.exports = function (app, client) {
	app.get("/comments/:limit/:offset/:publicationID", (req, res) => {
		getComments(client, req, res)
	})

	app.get("/comments/:id", (req, res) => {
		getTotalComments(client, req, res)
	})
}
