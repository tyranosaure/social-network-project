module.exports.deleteComment= function (client, req, res) {
	let { id } = req.body
	let query = `delete from comments where "idComments" = ${parseInt(id)};`
	client.query(query, (err, result) => {
		if (!err) {
			res.status(204)
			res.send("comment deleted successfully")
		} else {
			console.log(err.message)
			res.status(400)
			res.send(err.message)
		}
	})
}