module.exports.getPublications = async function (client, req, res) {
	let limit = parseInt(req.params.limit)
	let offset = parseInt(req.params.offset)

	const query = await client
		.select("*")
		.from("publication")
		.orderBy("publication.publicationID", "desc")
		.offset(offset)
		.limit(limit)
		.then((result) => {
			res.status(200)
			res.send(result)
		})
}
