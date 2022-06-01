module.exports = function (app, client) {
	app.post("/publications", (req, res) => {
		res.send("Salut bg, ton paramètre était : " + JSON.stringify(req.body))
	})
}
