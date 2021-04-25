const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./queries')
const app = express()

app.use(cors())
app.use(express.json())
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

app.get('/', db.getData)
app.post('/data', db.getParkByName, db.validateData, db.insertData)
app.post('/data', db.insertPark, db.validateData, db.insertData)

app.listen(9000, (req, res) => {
    console.log('LISTENING ON PORT 3000')
})