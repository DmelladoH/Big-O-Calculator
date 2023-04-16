const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const bigOController = require('../controllers/bigOcontroller')
const notFound = require('../middleware/notFound')

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.text())

app.use('/api/getBigO', bigOController)

app.use(notFound)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
