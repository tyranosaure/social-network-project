module.exports.postComment = async function (client, req, res) {
	let { content, publicationID, userName } = req.body

	const query = await client
		.insert({ content: content, publicationID: publicationID, userName: userName })
		.into("commentaire")
		.then((result) => {
			res.status(201)
			res.send("insertion was successful")
		})
		.catch((err) => {
			console.log(err.message)
			res.status(400)
			res.send(err.message)
		})
}
