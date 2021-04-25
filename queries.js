const pool = require("./db")
const SQL = require('sql-template-strings')

const validateData = (req, res, next) => {
    const { parkId, numOfDucks, foodType, foodAmount, timeFed } = req.body;
    if (isNaN(parseInt(numOfDucks)) || isNaN(parseFloat(foodAmount))) res.sendStatus(406);
    else next();
}

const getParkByName = async (req, res, next) => {
    const { parkName } = req.body
    try {
        const data = await pool.query(SQL`SELECT * FROM park 
                                          WHERE name=${parkName}`) 
        if (data.rows.length === 0) next('route');
        else {
            req.body.parkId = data.rows[0].id;
            next();
        }
    } catch (error) {
        res.sendStatus(405)
    }
}

const insertPark = async (req, res, next) => {
    const { parkName } = req.body;
    try {
        data = await pool.query(SQL`INSERT INTO park (name) 
                       VALUES (${parkName}) RETURNING id`)
        req.body.parkId = results.data[0].id
        next()
    } catch(err) {
        res.sendStatus(500)
    }
}

const insertData = async (req, res) => {
    const { parkId, numOfDucks, foodType, foodAmount, timeFed } = req.body;
    try {
        const data = await pool.query(SQL`INSERT INTO groupofducks (park_id, group_size, food_name, food_quantity, time_fed) 
                                          VALUES (${parkId}, ${numOfDucks}, ${foodType}, ${foodAmount}, ${timeFed})`)
        res.status(200).send()
    } catch (err) {
        res.sendStatus(500)
    }
}


const getData = async (req, res) => {
    try {
        const data = await pool.query(SQL`SELECT groupofducks.Id, park.name AS park_name, food_name, food_quantity, time_fed, group_size 
                                          FROM groupofducks 
                                          INNER JOIN park ON groupofducks.park_id=park.id;`)
        res.status(200).json(data.rows)
    } catch (err) {
        res.sendStatus(500)
    }
}



module.exports = {
    insertPark,
    insertData,
    getData,
    getParkByName,
    validateData
}