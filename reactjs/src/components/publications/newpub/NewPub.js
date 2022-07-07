import React from "react"
import { postPublication } from "@services/index"
import "./NewPub.scss"

export default function NewPub({ content, user, email, setNewPub, newPub, onPublish }) {
	async function postNewPub() {
		await postPublication("/publications", { userName: user, userID: email, content: content })
		setNewPub({ ...newPub, show: false, content: "" })
		onPublish()
	}

	return (
		<div className="new-pub-container">
			<div className="container">
				<div className="close-modal" onClick={() => setNewPub({ ...newPub, show: false })}>
					<div className="times">&times;</div>
				</div>

				<div className="form-container">
					<input
						type="text"
						className="content"
						placeholder="Contenu de la publication"
						value={content}
						onChange={(e) => setNewPub({ ...newPub, content: e.target.value })}
					/>
					<input
						type="submit"
						className="submit"
						disabled={content === "" ? true : false}
						value="Poster une nouvelle publication"
						onClick={postNewPub}
					/>
				</div>
			</div>
		</div>
	)
}
