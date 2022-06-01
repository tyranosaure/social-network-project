module.exports.findOne = function (client, req, res) {
	const id = parseInt(req.params.id)
	let query = `Select * from "Users" where id = ${id} limit 1`
	client.query(query, (err, result) => {
		if (!err) {
			res.status(201)
			res.send(result.rows)
		} else {
			console.log(err.message)
		}
	})
}
