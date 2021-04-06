const {Pool} = require('pg');

const pool = new Pool({
    user: 'quentin',
    host: 'localhost',
    database: 'quentin',
    password: 'quentin',
    port: 5432
});

pool.on('connect', client => {
    client.query('set search_path to sales')
});

module.exports = {
    query: (text, params) => {
        return pool.query(text, params)
    }
};