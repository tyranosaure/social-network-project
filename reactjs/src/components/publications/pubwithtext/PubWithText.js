import React from "react"
import { Commentary } from "@components/index"
import "../Publications.scss"
import "./PubWithText.scss"
import PubHeader from "../comp/PubHeader"
export default function PubWithText(props) {
	const { username, post, idPost } = props
	return (
		<div className="publication">
			<PubHeader user={username} id={idPost} />
			<div className="content">{post}</div>
			{/* <Commentary comments={comments} /> */}
		</div>
	)
}
