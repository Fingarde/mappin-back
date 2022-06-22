const jwt = require('jsonwebtoken');
const JWT_SECRET = 'cNTXkvQCAKKeRrGFh444eMpfhvxJtHgP2duerNGUdtgYTS3CKMAFpbZaTMVyp9bh';

function forgeJwt(uuid) {
    //const expire_at = Math.floor(new Date(Date.now() + 15 * 60000).getTime() / 1000)

    return jwt.sign(
        {
            sub: uuid,
            //exp: expire_at
        },
        JWT_SECRET);
}

module.exports = {
    forgeJwt
}