import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "@styles/index.scss"
import { Auth0Provider } from "@auth0/auth0-react"
import { AuthConfig, ReduxStore } from "@services/index"
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<Provider store={ReduxStore}>
			<Auth0Provider domain={AuthConfig.domain} clientId={AuthConfig.clientId} redirectUri={window.location.origin}>
				<App />
			</Auth0Provider>
		</Provider>
	</React.StrictMode>
)
