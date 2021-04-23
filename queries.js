const pool = require("./db")
const SQL = require('sql-template-strings')

const getPark = (req ,res) => {
    pool.query("SELECT * FROM park", (err, response) => {
        if (err) throw err
        res.status(200).json(response.rows)
    })
}


module.exports = {
    getPark
}