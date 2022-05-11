module.exports.all = function (client, req, res) {
	let query =
		req.query.limit && req.query.offset
			? `Select id, urlImage, pseudo from "Artiste" order by pseudo asc limit ${req.query.limit} offset ${req.query.offset}`
			: `Select id from "Artiste" order by pseudo asc`
	client.query(query, (err, result) => {
		if (!err) {
			res.status(201)
			req.query.limit && req.query.offset ? res.send(result.rows) : res.send(result.rowCount.toString())
		} else {
			console.log(err.message)
		}
	})
}
module.exports.one = function (client, req, res) {
	const id = parseInt(req.params.id)
	let query = `Select * from "Artiste" where id = ${id} limit 1`
	client.query(query, (err, result) => {
		if (!err) {
			res.status(201)
			res.send(result.rows)
		} else {
			console.log(err.message)
		}
	})
}
