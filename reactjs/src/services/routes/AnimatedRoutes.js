import { Home, NotFound } from "@views/index"
import { AnimatePresence } from "framer-motion"
import { Routes } from "react-router-dom"
import React from "react"
import { Route, useLocation } from "react-router"

export default function AnimatedRoutes() {
	const location = useLocation()

	return (
		<AnimatePresence initial={false} exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path="/">
					<Route index element={<Home />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</AnimatePresence>
	)
}
