import React from "react"
import { Commentary } from "@components/index"
import "../Publications.scss"

export default function PubWithText() {
	return (
		<div className="publications">
			<div className="content">PubWithText</div>
			<Commentary />
		</div>
	)
}
