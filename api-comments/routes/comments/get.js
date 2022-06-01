module.exports = function (app, client) {
	app.get("/comments", (req, res) => {
		res.status(200).send("salut")
	})
}
