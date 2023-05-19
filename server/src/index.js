const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const bigOController = require('../controllers/bigOcontroller')
const notFound = require('../middleware/notFound')
const errorHandler = require('../middleware/errorHandle')

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
  origin: '*',
  methods: 'POST', // specify allowed HTTP methods
  allowedHeaders: 'Content-Type, Authorization', // specify allowed headers
  optionsSuccessStatus: 200 // specify the status code for successful pre-flight requests
}))

app.use(bodyParser.json())

app.use('/api/getBigO', bigOController)

app.use(errorHandler)
app.use(notFound)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
