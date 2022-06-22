const express = require('express');
var { expressjwt: jwt } = require("express-jwt");

const pinController = require('../controllers/pinController');

const router = express.Router();

const JWT_SECRET = 'cNTXkvQCAKKeRrGFh444eMpfhvxJtHgP2duerNGUdtgYTS3CKMAFpbZaTMVyp9bh';

router.use(jwt({ secret: JWT_SECRET, algorithms: ['HS256'] }), (err, req, res, next) => {
    if (err.name === 'UnauthorizedError')
        return res.status(401).json({
            error: "Invalid token"
        })

    console.log("log")

    next()
})

router.get('/', (req, res) => {
    pinController.getAll(req, res);
});

router.post('/', (req, res) => {
    pinController.add(req, res);
});


module.exports = router;