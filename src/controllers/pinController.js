const pinService = require("../services/pinService")

function getAll(req, res) {
	const user_uuid = req.auth.sub

	pinService.getAll(user_uuid)
		.then((service_res) => {
			res
				.status(service_res.status)
				.json(service_res.content)
		})
		.catch((err) => {
			console.log(err)
			res
				.status(err.status)
				.json({
					error: err.error
				})
		})
};

function add(req, res) {
	const userUuid = req.auth.sub
	const params = { itemUuid, latitude, longitude, date } = req.body

	if (!params.itemUuid || !params.latitude || !params.longitude || !params.date) return res.status(422).send("Missing field")

	pinService.add(userUuid, params)
		.then((service_res) => {
			res
				.status(service_res.status)
				.json(service_res.content)
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
	getAll,
    add
};