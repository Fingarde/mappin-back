const db = require('better-sqlite3')('data/database.db', {});
db.pragma('foreign_keys = ON');

function userExists(username) {
    const stmt = db.prepare('SELECT count(*) as "exists" FROM users WHERE username = ? LIMIT 1')

    const result = stmt.get(username).exists

    return !!result
}

function createUser(uuid, username, password) {
    const stmt = db.prepare('INSERT INTO users VALUES(?, ?, ?)')

    stmt.run(uuid, username, password)
}

function getPassword(username) {
    const stmt = db.prepare('SELECT password FROM users WHERE username = ?')

    const result = stmt.get(username).password

    return result
}

function getUuid(username) {
    const stmt = db.prepare('SELECT uuid FROM users WHERE username = ?')

    const result = stmt.get(username).uuid

    return result
}


module.exports = {
    userExists,
    createUser,
    getPassword,
    getUuid
}