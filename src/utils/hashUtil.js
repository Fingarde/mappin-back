const bcrypt = require('bcrypt');

function hash(password) {
    return bcrypt.hashSync(password, 10)
}

function verify(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = {
    hash,
    verify
}   