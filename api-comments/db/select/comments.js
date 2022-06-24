module.exports.getComments = function (client, req, res) {
	let limit = parseInt(req.params.limit)
	let offset = parseInt(req.params.offset)
	let fkPost = parseInt(req.params.id)
	let query = `Select * from "comments" where fk_Post = ${fkPost} order by "idComments" desc offset ${offset} limit ${limit}`

	client.query(query, (err, result) => {
		if (!err) {
			res.status(200)
			res.send(result.rows)
		} else {
			res.status(400)
			res.send(err)
			console.log(err.message)
		}
	})
}
module.exports.getTotalComments = function (client, req, res) {
	let fkPost = parseInt(req.params.id)
	let query = `Select count('idComments') as "total" from "comments" where fk_Post = ${fkPost}`

	client.query(query, (err, result) => {
		if (!err) {
			res.status(200)
			res.send(result.rows[0].total)
		} else {
			res.status(400)
			res.send(err)
			console.log(err.message)
		}
	})
}
