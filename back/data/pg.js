const {Pool} = require('pg');

const pool = new Pool({
    user: 'tnyrwquq',
    host: 'tai.db.elephantsql.com',
    database: 'tnyrwquq',
    password: 'eM4wIMtyPqWWwDLvkII_x37y9mL1ZPVY',
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