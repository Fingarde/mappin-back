const express = require('express')
const app = express()
var morgan = require('morgan')
var cors = require('cors');

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors());

const pinRouter = require('./src/routes/pinRoute')
const loginRouter = require('./src/routes/loginRoute')

app.use(morgan('combined'))
app.use(`/pin`, pinRouter)
app.use('/auth', loginRouter)

app.listen(8080, () => {
    console.log(`Example app listening at http://localhost:8080`)
})
