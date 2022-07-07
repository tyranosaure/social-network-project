import { getComments, postComments } from "@services/index"
import { useSelector } from "react-redux"
import React, { useEffect, useState } from "react"
import "./Commentary.scss"
import { Pager } from "@components/index"

export default function Commentary(props) {
	const [comments, setComments] = useState(false)
	const [pager, setPager] = useState({ limit: 3, offset: 0, total: -1 })
	const [newComment, setNewComment] = useState({ content: "", username: "" })
	const userRedux = useSelector((state) => state.user.value)

	async function getComs(limit, offset) {
		let data = await getComments(`/comments/${limit}/${offset}/${props.publicationID}`)
		setComments(data)
	}

	async function getTotalComs() {
		let data = await getComments(`/comments/${props.publicationID}`)
		setPager({ ...pager, total: data.data })
	}

	async function postNewComment() {
		let username = userRedux.name ? userRedux.name : userRedux.email
		await postComments("/comments", { userName: username, publicationID: props.publicationID, content: newComment.content }).then(() => {
			setNewComment({ ...newComment, content: "" })
			getComs(pager.limit, pager.offset)
			getTotalComs()
		})
	}

	useEffect(() => {
		comments === false && getComs(pager.limit, pager.offset)
		userRedux && userRedux.name !== "" && newComment.name === "" && setNewComment({ ...newComment, username: userRedux.name })
		userRedux && newComment.name === "" && setNewComment({ ...newComment, username: userRedux.email })
		pager.total === -1 && getTotalComs()
	})

	return (
		<div className="commentary">
			{comments && comments.status === 200 && comments.data.length > 0 && (
				<>
					{comments.data.map((com) => (
						<Com key={com.commentaireID} user={com.userName} content={com.content} />
					))}
					{pager.total !== -1 && (
						<div className="pager">
							<Pager total={pager.total} limit={pager.limit} getData={getComs} />
						</div>
					)}
				</>
			)}
			{comments.status === 200 && comments.data.length === 0 && <div className="no-result">Aucun commentaire</div>}
			{userRedux && (
				<div className="form-container">
					<input
						type="text"
						className="content"
						placeholder="Ajouter un commmentaire..."
						value={newComment.content}
						onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
					/>
					<input
						type="submit"
						className="submit"
						disabled={newComment.content === "" ? true : false}
						value="Envoyer"
						onClick={postNewComment}
					/>
				</div>
			)}
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
