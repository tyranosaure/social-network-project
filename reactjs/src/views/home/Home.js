import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import HomeFeed from "./logged/HomeFeed"
import "./Home.scss"

export default function Home() {
	const { isAuthenticated } = useAuth0()

	return isAuthenticated ? (
		<HomeFeed />
	) : (
		<div className="home-not-logged-home">
			<h1>Connectez vous pour voir les publications et y réagir</h1>
		</div>
	)
}
