const get = require("./get")
const post = require("./post")
const del = require("./delete")
module.exports = function (app, client) {
	get(app, client)
	post(app, client)
	del(app, client)
}
