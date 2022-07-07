import { NewPub, PubWithText } from "@components/index"
import React, { useEffect, useState } from "react"
import "./HomeFeed.scss"
import { getPublications } from "@services/api/publication/get"
import { useSelector } from "react-redux"

export default function HomeFeed() {
	const gridFlow = "inLineGrid"
	const [pubs, setPubs] = useState(false)
	const pager = { limit: 50, offset: 0 }
	const [newPub, setNewPub] = useState({ show: false, content: "", user: "", email: "" })
	const userRedux = useSelector((state) => state.user.value)

	async function getPubs(limit = 50, offset = 0) {
		let data = await getPublications(`/publications/${limit}/${offset}`)
		setPubs(data)
	}

	useEffect(() => {
		!pubs && getPubs(pager.limit, pager.offset)
		userRedux && newPub.email === "" && setNewPub({ ...newPub, user: userRedux.name, email: userRedux.email })
		newPub.show && getPubs(pager.limit, pager.offset)
	})

	return (
		<div className="home-feed">
			{newPub.show && <NewPub {...newPub} newPub={newPub} setNewPub={setNewPub} onPublish={getPubs} />}
			<div className="manage-view">
				<button className="new-pub" onClick={() => setNewPub({ ...newPub, show: true })}>
					Nouvelle publication
				</button>
			</div>
			<div className={`column ${gridFlow}`}>
				{pubs.status === 200 && pubs.data.map((pub) => <PubWithText key={pub.publicationID} {...pub} get={getPubs} />)}
			</div>
		</div>
	)
}
