import React, { useState } from "react"
import "./Pager.scss"
export default function (props) {
	const limit = props.limit && props.limit !== 0 ? props.limit : 1
	const total = props.total ? props.total : 0

	const nbButton = Math.ceil(total / limit)
	const [activeBtn, setActiveBtn] = useState(0)

	function getData(index) {
		setActiveBtn(index)
		props.getData(limit, limit * index)
	}
	return (
		<div className="container-pager">
			<div className="container">
				{nbButton > 0 &&
					Array(Math.ceil(nbButton))
						.fill(1)
						.map(
							(el, i) =>
								Math.ceil(nbButton) > 1 && (
									<button
										key={i}
										onClick={() => getData(i)}
										disabled={activeBtn === i && true}
										className={`item ${activeBtn === i && "active"}`}
									>
										{i + 1}
									</button>
								)
						)}
			</div>
		</div>
	)
}
