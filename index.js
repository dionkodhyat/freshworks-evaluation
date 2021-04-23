const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendStatus(200);
})

app.listen(9001, () => {
    console.log("LISTENING ON PORT 9001")
}) 
