
const{getComments}= require("../../db/select/comments")
module.exports = function (app, client) {
	app.get("/comments", (req, res) => {
		getComments(client,req, res)
		res.status(200)
	})
}
