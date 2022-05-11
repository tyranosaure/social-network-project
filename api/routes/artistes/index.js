const get = require("./get")
const post = require("./post")
module.exports = function (app, client) {
	get(app, client)
	post(app, client)
}
