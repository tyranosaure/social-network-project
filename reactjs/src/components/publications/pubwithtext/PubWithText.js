import React from "react"
import { Commentary } from "@components/index"
import "../Publications.scss"
import "./PubWithText.scss"
import PubHeader from "../comp/PubHeader"

export default function PubWithText(props) {
	const { userName, content, publicationID, get } = props

	return (
		<div className="publication">
			<PubHeader user={userName} id={publicationID} get={get} />
			<div className="content">{content}</div>
			<Commentary publicationID={publicationID} />
		</div>
	)
}
