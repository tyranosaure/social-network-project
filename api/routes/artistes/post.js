module.exports = function (app, client) {
	app.post("/artistes", (req, res) => {
		res.send("Salut bg, ton paramètre était : " + JSON.stringify(req.body))
	})
}
