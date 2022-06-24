const routes = require("./routes/index")
const cors = require("cors")
const express = require("express")
const app = express()

// Données
const client = require("./db/connection")

app.use(express.json(), cors())

const port = 8080
app.listen(port, () => {
	console.log("Serveur à l'écoute du port : " + port)
})

routes(app, client)

client.connect()
