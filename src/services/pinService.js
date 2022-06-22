const uuid = require('uuid');

const pinRepository = require("../repositories/pinRepository")

function getAll(userUuid) {
    return new Promise((resolve, reject) => {
        let pins = pinRepository.getAll(userUuid)

        return resolve({
            status: 200,
            content: pins
        })
    })
}

function add(userUuid, params) {
    return new Promise((resolve, reject) => {
        params.uuid = uuid.v4()

        let pin = pinRepository.add(userUuid, params)

        return resolve({
            status: 201,
            content: pin
        })
    })
}

module.exports = {
    getAll,
    add
}