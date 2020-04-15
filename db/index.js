const { Pool } = require('pg');

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "postgres",
    port: 5432,
    database: "Avoidance",
});

module.exports = {
    query: (text, params) => pool.query(text, params)
}
