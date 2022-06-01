module.exports = function (app, client) {
	app.post("/users", (req, res) => {
		res.send("Salut bg, ton paramètre était : " + JSON.stringify(req.body))
	})
}
