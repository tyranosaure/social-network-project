import React, { useState } from "react"
import "./Pager.scss"
export default function (props) {
	const nbButton = props.total && props.limit ? Math.ceil(props.total / props.limit) : 10
	const [activeBtn, setActiveBtn] = useState(0)

	function getData(index) {
		setActiveBtn(index)
		props.getData(props.limit, props.limit * index)
	}
	return (
		<div className="container-pager">
			<div className="container">
				{nbButton &&
					Array(Math.ceil(nbButton))
						.fill(1)
						.map((el, i) => (
							<button
								key={i}
								onClick={() => getData(i)}
								disabled={activeBtn === i && true}
								className={`item ${activeBtn === i && "active"}`}
							>
								{i + 1}
							</button>
						))}
			</div>
		</div>
	)
}
