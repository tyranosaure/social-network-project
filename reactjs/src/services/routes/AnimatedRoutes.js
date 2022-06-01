import React from "react"
import { Home, NotFound } from "@views/index"

import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

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
