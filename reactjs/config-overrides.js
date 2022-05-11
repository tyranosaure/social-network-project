const { alias } = require("react-app-rewire-alias")

module.exports = function override(config) {
	alias({
		"@components": "src/components",
		"@views": "src/views",
		"@services": "src/services",
		"@styles": "src/styles",
		"@assets": "src/assets",
		"@requests": "src/requests",
	})(config)

	return config
}
