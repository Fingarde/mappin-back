const db = require('better-sqlite3')('data/database.db', {});
db.pragma('foreign_keys = ON');

function getAll(userUuid) {
    const stmt = db.prepare('SELECT uuid, userUuid, latitude, longitude, itemUuid, date FROM pins WHERE userUuid = ?')

    const result = stmt.all(userUuid)

    return result
}


function add(userUuid, params) {
    const stmt = db.prepare('INSERT INTO pins VALUES(?, ?, ?, ?, ?, ?)')

    const result = stmt.run(params.uuid, userUuid, params.latitude , params.longitude, params.itemUuid, params.date)

    return {uuid, userUuid, latitude , longitude, itemUuid, date } = params
}

module.exports = {
    getAll,
    add
}