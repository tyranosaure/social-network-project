module.exports.getComments = function (client, req, res) {
	const id = parseInt(req.params.id)
	let query = `Select * from "comments" where fk_post = ${id}`
	client.query(query, (err, result) => {
		if (!err) {
			res.status(201)
			res.send(result.rows)
		} else {
			console.log(err.message)
		}
	})
}
