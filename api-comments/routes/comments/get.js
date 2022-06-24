const { getComments } = require("../../db/select/comments")

module.exports = function (app, client) {
	app.get("/comments/:limit/:offset/:id", (req, res) => {
		getComments(client, req, res)
		client.end
	})
}
