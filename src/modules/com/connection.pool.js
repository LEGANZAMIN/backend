//require('dotenv').config();

const dotenv = require('dotenv');
//dotenv.config({ path: 'db.env' });
dotenv.config({ path: 'src/resources/config/db.env' });

var config = {
    user             ,     
    database         , 
    password         , 
    host             , 
    port             , 
    max              , 
    idleTimeoutMillis 
} = process.env;
/*
var config = {
    user             : process.env.PG_USER,     // env var: PGUSER 
    database         : process.env.PG_DATABASE, // env var: PGDATABASE
    password         : process.env.PG_PASSWORD, // env var: PGPASSWORD
    host             : process.env.PG_HOST,     // Server hosting the postgres database
    port             : process.env.PG_PORT,     // env var: PGPORT
    max              : process.env.PG_MAX,      // max number of clients in the pool
    idleTimeoutMillis: process.env.PG_IDLE_TIMEOUT_MILLIS // how long a client is allowed to remain idle before being closed
} 
*/

const pg   = require('pg');
const pool = new pg.Pool(config);
//module.exports = pool;

exports.getConnection = () => {
    const client = pool.connect();
    return client
};
