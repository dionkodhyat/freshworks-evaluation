const Pool = require('pg').Pool
const pool = new Pool( {
    user : 'postgres',
    host : 'localhost',
    database : 'fwree2',
    password : '2525',
    port : 5432
})

module.exports = pool