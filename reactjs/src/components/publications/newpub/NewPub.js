import React from "react"
import "./NewPub.scss"

export default function NewPub({ content, user, email }) {
	return (
		<div className="new-pub-container">
			<div className="container">
				<div className="close-modal">
					<div className="times">&times;</div>
				</div>

				<div className="form-container">
					<input
						type="text"
						className="content"
						placeholder="Contenu de la publication"
						value={content}
						onChange={(e) => (content = e.target.value)}
					/>
				</div>
			</div>
		</div>
	)
}
