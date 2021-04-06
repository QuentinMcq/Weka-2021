const {Pool} = require('pg');

const pool = new Pool({
    user: 'lxjvjwof',
    host: 'tai.db.elephantsql.com',
    database: 'lxjvjwof',
    password: '7vCXldabKS_jBYW1OnGfSkRl9nweWEtx',
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