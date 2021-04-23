const pool = require("./db")
const SQL = require('sql-template-strings')

const getPark = (req ,res) => {
    pool.query("SELECT * FROM park", (err, response) => {
        if (err) throw err
        res.status(200).json(response.rows)
    })
}

const insertPark = (req, res) => {
    const { parkName } = req.body;
    pool.query(SQL`INSERT INTO park (name) 
                   VALUES (${parkName}) RETURNING id`, (error, results) => {
        if (error) {}
        res.send(200)
    })
}


module.exports = {
    getPark,
    insertPark
}