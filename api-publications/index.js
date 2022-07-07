const routes = require("./routes/index")
const cors = require("cors")
const express = require("express")
const app = express()

// Données
const knex = require("./db/connection").knex

app.use(express.json(), cors())

const port = 8081
app.listen(port, () => {
	console.log("Serveur à l'écoute du port : " + port)
})

routes(app, knex)
