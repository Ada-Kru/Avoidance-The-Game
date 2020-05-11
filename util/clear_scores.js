const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

(async () => {
  const { rows } = await pool.query(`DELETE FROM scores`);
})();
