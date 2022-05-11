import { Link } from "react-router-dom"
import React, { useEffect } from "react"
import "./Navbar.scss"
import { default as Logo } from "@assets/header/logo.svg.png"
import { default as NavRoutes } from "./Routes.json"
import { useSelector, useDispatch } from "react-redux"
import { UserSlice } from "@services/index"
import { useAuth0 } from "@auth0/auth0-react"

export default function Navbar() {
	const userRedux = useSelector((state) => state.user)
	const dispatch = useDispatch()

	const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0()

	useEffect(() => {
		isAuthenticated && dispatch(UserSlice.login(user))
		!isAuthenticated && dispatch(UserSlice.logout())
	})

	return (
		<header className="navbar">
			<nav>
				<div className="container">
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
						{userRedux.isLogged === undefined && (
							<button className="login connect" onClick={loginWithRedirect}>
								Chargement...
							</button>
						)}
						{userRedux.isLogged === false && (
							<button className="login connect" onClick={loginWithRedirect}>
								Se connecter
							</button>
						)}
						{userRedux.isLogged === true && (
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
