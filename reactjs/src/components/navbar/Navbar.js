import { Link } from "react-router-dom"
import React, { useEffect } from "react"
import "./Navbar.scss"
import { default as Logo } from "@assets/header/logo.svg.png"
import { default as NavRoutes } from "./Routes.json"
import { useSelector, useDispatch } from "react-redux"
import { UserSlice } from "@services/index"
import { useAuth0 } from "@auth0/auth0-react"
import { ThreeDotsInLine } from "@components/index"

export default function Navbar() {
	const userRedux = useSelector((state) => state.user)
	const dispatch = useDispatch()

	const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0()

	useEffect(() => {
		isAuthenticated && dispatch(UserSlice.login(user))
		!isAuthenticated && dispatch(UserSlice.logout())
	})

	return (
		<header className="navbar">
			<nav>
				<div className="container" onClick={() => console.log(user)}>
					<Link to="/" className="logo-container">
						<img src={Logo} alt="" />
					</Link>
					<div className="right-side-container">
						<ul className="link-container">
							{NavRoutes &&
								NavRoutes.map((route, index) => (
									<Link key={index} to={route.route} className="link">
										{route.label}
									</Link>
								))}
						</ul>
						{isLoading && !isAuthenticated && <ThreeDotsInLine />}
						{!isLoading && !isAuthenticated && (
							<button className="login connect" onClick={loginWithRedirect}>
								Se connecter
							</button>
						)}
						{isAuthenticated && userRedux.isLogged === true && (
							<>
								<button className="login disconnect" onClick={logout}>
									Se déconnecter
								</button>
								<Link to="/profile" className="link-profil">
									<img className="profil" src={userRedux.value.picture} alt="profile" />
								</Link>
							</>
						)}
					</div>
				</div>
			</nav>
		</header>
	)
}
