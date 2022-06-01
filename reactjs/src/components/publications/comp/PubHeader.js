import React, { useState } from "react"
import "./PubHeader.scss"
import { AiFillEdit, AiFillDelete, AiFillCaretDown } from "react-icons/ai"

export default function PubHeader(props) {
	const [openDialog, setOpenDialog] = useState(false)
	const { user } = props
	return (
		<div className="pub-header">
			<div className="user">
				<img src="https://via.placeholder.com/48" alt="user" />
				<span className="user-name">{user}</span>
			</div>
			<div className="manage">
				<div className={`container ${openDialog ? "open-dialog" : "close-dialog"}`}>
					<button className="edit">
						<AiFillEdit />
					</button>

					<button className="remove">
						<AiFillDelete />
					</button>
				</div>

				<button onClick={() => setOpenDialog(!openDialog)} className={`dots ${openDialog && "open"}`}>
					<AiFillCaretDown />
				</button>
			</div>
		</div>
	)
}
