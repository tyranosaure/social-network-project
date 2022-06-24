module.exports.postComment = function (client, req, res) {
	let { content, fk_post, username } = req.body

	let query = `insert into comments ("comments","fk_post", "username") values ('${content.toString()}', '${fk_post.toString()}', '${username.toString()}');`

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