const Pool = require('pg').Pool
const pool = new Pool( {
    user : 'postgres',
    host : 'localhost',
    database : 'localdb',
    password : '2525',
    port : 5432
})

module.exports = pool