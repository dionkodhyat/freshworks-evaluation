const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const db = require('./queries')

app.use(cors())
app.use(express.json())
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )



app.get('/park', db.getPark)
app.post('/park', db.insertPark)
app.get('/data', db.getData)
app.post('/data', db.insertData)


app.listen(9001, () => {
    console.log("LISTENING ON PORT 9001")
}) 
