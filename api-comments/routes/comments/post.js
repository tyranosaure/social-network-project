const { postComment } = require("../../db/insert/comments")

module.exports = function (app, client) {
	app.post("/comments", (req, res) => {
		postComment(client, req, res)
		client.end
	})
}
