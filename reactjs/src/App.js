import React from "react"
import { AnimatedRoutes } from "@services/index"
import "./App.scss"
import { Navbar } from "@components/index"
import { BrowserRouter } from "react-router-dom"

export default function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<AnimatedRoutes />
			</BrowserRouter>
		</div>
	)
}
