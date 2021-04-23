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

const insertData = (req, res) => {
    console.log(req.body)
    const { parkId, numOfDucks, foodType, foodAmount, timeFed } = req.body;
    pool.query(SQL`INSERT INTO groupofducks (park_id, group_size, food_name, food_quantity, time_fed) 
                   VALUES (${parkId}, ${numOfDucks}, ${foodType}, ${foodAmount}, ${timeFed})`,
                   (error, result) => {
                       if (error) res.status(405)
                       res.status(200)
                   });
}



const getData = (req, res) => {
    pool.query(SQL`SELECT groupofducks.Id, park.name AS park_name, food_name, food_quantity, time_fed, group_size 
                   FROM groupofducks 
                   INNER JOIN park ON groupofducks.park_id=park.id;`, (error, results) => {
        if (error) console.log(error)
        res.status(200).json(results.rows)
    })
}



module.exports = {
    getPark,
    insertPark,
    insertData,
    getData
}