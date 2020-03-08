var mysql = require('mysql');
const config = {
    host: 'localhost',
    user: 'user',
    password: 'P4$$word',
    database: 'tiny_store',
};

const pool = mysql.createPool(config);
module.exports = pool;