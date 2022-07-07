module.exports.deletePublications = async function (client, req, res) {
	let { publicationID } = req.body

	const query = await client
		.where({ publicationID: publicationID })
		.from("publication")
		.del()
		.then((result) => {
			res.status(204)
			res.send("publication deleted successfully")
		})
}
