const uuid = require('uuid');

const hash = require("../utils/hashUtil")
const jwtService = require("./jwtService")
const loginRepository = require("../repositories/loginRepository")


function register(username, password) {
    return new Promise((resolve, reject) => {
        if (loginRepository.userExists(username)) {
            return reject({
                status: 400,
                error: "User already exists"
            })
        }

        let { uuid } = createUser(username, password)

        return resolve({
            uuid,
            username
        })
    })
}

function login(username, password) {
    return new Promise((resolve, reject) => {
        if (!loginRepository.userExists(username)) {
            return reject({
                status: 400,
                error: "Invalid username or password"
            })
        }

        const valid = verifyPassword(username, password)
        if (!valid) {
            return reject({
                status: 400,
                error: "Invalid username or password"
            })
        }

        const uuid = loginRepository.getUuid(username)

        const token = jwtService.forgeJwt(uuid)

        return resolve({
            token
        })
    })
}

function createUser(username, password) {
    const hashed_password = hash.hash(password)
    const user_uuid = uuid.v4()

    loginRepository.createUser(user_uuid, username, hashed_password)

    return { uuid: user_uuid, username }
}

function verifyPassword(username, password) {
    const hashed_password = loginRepository.getPassword(username)

    return hash.verify(password, hashed_password)
}

module.exports = {
    register,
    login
}