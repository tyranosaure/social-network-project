import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import HomeFeed from "./logged/HomeFeed"

export default function Home() {
	const { isAuthenticated } = useAuth0()

	return isAuthenticated ? <HomeFeed /> : <h1>Pas co</h1>
}
