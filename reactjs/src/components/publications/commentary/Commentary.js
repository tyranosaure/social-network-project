import React from "react"
import "./Commentary.scss"
export default function Commentary(props) {
	return (
		<div className="commentary">
			{props.comments.map((com) => (
				<Com key={com.id} user={com.user} content={com.content} />
			))}
		</div>
	)
}

function Com(props) {
	const { user, content } = props
	return (
		<div className="com">
			<span className="user-name">{user}</span>
			<p className="content">{content}</p>
		</div>
	)
}
