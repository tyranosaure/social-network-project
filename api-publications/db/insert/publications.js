module.exports.postPublications = async function (client, req, res) {
	let { content, userID, userName } = req.body

	const query = await client
		.insert({ content: content, userID: userID, userName: userName })
		.into("publication")
		.then((result) => {
			res.status(201)
			res.send("insertion was successful")
		})
}
