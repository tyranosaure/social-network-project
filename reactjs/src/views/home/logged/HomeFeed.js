import { PubWithImage, PubWithText } from "@components/index"
import React from "react"
import "./HomeFeed.scss"
export default function HomeFeed() {
	return (
		<div className="home-feed">
			<div className="column">
				<PubWithImage />
				<PubWithText />
			</div>
		</div>
	)
}
