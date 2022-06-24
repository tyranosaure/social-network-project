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
		let data = await getComments(`/comments/${limit}/${offset}/${props.idPost}`)
		setComments(data)
	}

	async function getTotalComs() {
		let data = await getComments(`/comments/${props.idPost}`)
		setPager({ ...pager, total: data.data })
	}

	async function postNewComment() {
		let username = userRedux.name ? userRedux.name : userRedux.email
		let res = await postComments("/comments", { username: username, idPost: props.idPost, comments: newComment.content })
		setNewComment({ ...newComment, content: "" })
		if (res.statusCode === 201) {
			getComs(pager.limit, pager.offset)
		}
	}

	useEffect(() => {
		!comments && getComs(pager.limit, pager.offset)
		userRedux && userRedux.name !== "" && newComment.name === "" && setNewComment({ ...newComment, username: userRedux.name })
		userRedux && newComment.name === "" && setNewComment({ ...newComment, username: userRedux.email })
		pager.total === -1 && getTotalComs()
	})

	return (
		<div className="commentary">
			{comments && comments.status === 200 && comments.data.length > 0 && (
				<>
					{comments.data.map((com) => (
						<Com key={com.idComments} user={com.username} content={com.comments} />
					))}
					{pager.total !== -1 && (
						<div className="pager">
							<Pager total={pager.total} limit={pager.limit} getData={getComs} />
						</div>
					)}
				</>
			)}
			{comments.status === 200 && comments.data.length === 0 && (
				<>
					<div className="no-result">Aucun commentaire</div>
					<Pager />
				</>
			)}
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
