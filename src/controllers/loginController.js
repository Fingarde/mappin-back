const loginService = require('../services/loginService')

function register(req, res) {
	const { username, password } = req.body

	if (!username || !password) return res.status(422).send("Missing field username or password")

	loginService.register(username, password)
		.then((json) => {
			res
				.status(200)
				.json(json)
		})
		.catch((err) => {
			res
				.status(err.status)
				.json({
					error: err.error
				})
		})
}

function login(req, res) {
	const { username, password } = req.body;

	if (!username || !password) return res.status(422).send("Missing field username or password")

	loginService.login(username, password)
		.then((json) => {
			res
				.status(200)
				.json(json)
		})
		.catch((err) => {
			res
				.status(err.status)
				.json({
					error: err.error
				})
		})
}

module.exports = {
	login,
	register
}