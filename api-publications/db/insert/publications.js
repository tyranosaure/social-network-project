module.exports.postPublications = function (client, req, res) {
	let { content, email, user } = req.body

	let query = `insert into post ("post","user", "username") values ('${content.toString()}', '${email.toString()}', '${user.toString()}');`

	client.query(query, (err, result) => {
		if (!err) {
			res.status(201)
			res.send("insertion was successful")
		} else {
			console.log(err.message)
			res.status(400)
			res.send(err.message)
		}
	})
}
