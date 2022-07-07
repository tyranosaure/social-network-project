module.exports.getComments = async function (client, req, res) {
	let limit = parseInt(req.params.limit)
	let offset = parseInt(req.params.offset)
	let publicationID = parseInt(req.params.publicationID)

	const query = await client("commentaire")
		.select("*")
		.where({ publicationID: publicationID })
		.orderBy("commentaireID", "asc")
		.offset(offset)
		.limit(limit)
		.then((result) => {
			res.status(200)
			res.send(result)
		})
		.catch((err) => {
			res.status(400)
			res.send(err)
			console.log(err.message)
		})
}
module.exports.getTotalComments = async function (client, req, res) {
	let publicationID = parseInt(req.params.id)

	const query = await client
		.count("commentaireID as total")
		.from("commentaire")
		.where({ publicationID: publicationID })
		.then((result) => {
			res.status(200)
			res.send(result[0].total)
		})
		.catch((err) => {
			res.status(400)
			res.send(err)
			console.log(err.message)
		})
}
