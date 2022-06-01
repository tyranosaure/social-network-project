import { NewPub, Pager, PubWithText } from "@components/index"
import React, { useEffect, useState } from "react"
import "./HomeFeed.scss"
import { BiGridAlt } from "react-icons/bi"
import { RiLayoutRowLine } from "react-icons/ri"
import { getPublications } from "@services/api/publication/get"

export default function HomeFeed() {
	const [gridFlow, setgridFlow] = useState("inLineGrid")
	const [pubs, setPubs] = useState(false)
	const [pager, setPager] = useState({ limit: 10, offset: 0 })
	const [newPub, setNewPub] = useState({ show: false, content: "", user: "", email: "" })
	async function getPubs(limit, offset) {
		let data = await getPublications(`/publications/${limit}/${offset}`)
		setPubs(data)
	}

	useEffect(() => {
		!pubs && getPubs(pager.limit, pager.offset)
	})

	return (
		<div className="home-feed">
			{newPub.show && <NewPub {...newPub} />}
			<div className="manage-view">
				{/* <button onClick={() => setgridFlow("tableGrid")} className={`${gridFlow === "tableGrid" && "active"}`}>
					<BiGridAlt />
				</button> */}
				<button onClick={() => setgridFlow("inLineGrid")} className={`${gridFlow === "inLineGrid" && "active"}`}>
					<RiLayoutRowLine />
				</button>
				<button className="new-pub" onClick={() => setNewPub({ ...newPub, show: true })}>
					Nouvelle publication
				</button>
			</div>
			<div className={`column ${gridFlow}`}>
				{pubs.status === 200 && pubs.data.map((pub) => <PubWithText key={pub.idPost} {...pub} />)}
			</div>
			{/* <Pager /> */}
		</div>
	)
}
