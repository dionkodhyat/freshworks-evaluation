const Pool = require('pg').Pool
const pool = new Pool( {
    user : 'postgres',
    host : 'localhost',
    database : 'localDB',
    password : '2525',
    port : 5432
})

module.exports = pool