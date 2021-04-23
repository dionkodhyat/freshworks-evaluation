const pool = require("./db")
const SQL = require('sql-template-strings')

const getPark = (req ,res) => {
    pool.query("SELECT * FROM park", (err, response) => {
        if (err) throw err
        res.status(200).json(response.rows)
    })
}

const insertPark = (req, res, next) => {
    const { parkName } = req.body;
    pool.query(SQL`INSERT INTO park (name) 
                   VALUES (${parkName}) RETURNING id`, (error, results) => {
        if (error) {}
        req.body.parkId = results.rows[0].id
        next()
    })
}

const getParkByName = (req, res, next) => {
    const { parkName } = req.body
    pool.query(SQL`SELECT * FROM park 
                   WHERE name=${parkName}`, (error, results) => {
        if (error) res.sendStatus(405)
        if (results.rows.length === 0) next('route');
        else {
            req.body.parkId = results.rows[0].id;
            next();
        }
        
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
    getData,
    getParkByName
}