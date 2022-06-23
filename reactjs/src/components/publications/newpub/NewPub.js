import React from "react"
import { postPublication } from "@services/index"
import "./NewPub.scss"

export default function NewPub({ content, user, email, setNewPub, newPub }) {
	async function postNewPub() {
		let res = await postPublication("/publications", { user: user, email: email, content: content })
		console.log(res)
		setNewPub({ ...newPub, show: false, content: "" })
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
