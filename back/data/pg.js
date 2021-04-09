const {Pool} = require('pg');
const config = require('./env.local');

const pool = new Pool(config);

pool
    .on('connect', client => {
        client.query('set search_path to weka')
    })
    .on('error', () => console.log('Database connection lost'));

module.exports = pool;