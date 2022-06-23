module.exports.deletePublications = function (client, req, res) {
	let { id } = req.body
	let query = `delete from post where "idPost" = ${parseInt(id)};`
	client.query(query, (err, result) => {
		if (!err) {
			res.status(204)
			res.send("publication deleted successfully")
		} else {
			console.log(err.message)
			res.status(400)
			res.send(err.message)
		}
	})
}
