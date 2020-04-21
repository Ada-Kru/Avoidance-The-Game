const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query(
`CREATE TABLE scores(
    id SERIAL PRIMARY KEY,
    name VARCHAR(32) NOT NULL,
    character_type INT NOT NULL,
    total_score INT NOT NULL DEFAULT -1,
    health_score INT NOT NULL DEFAULT -1,
    social_score INT NOT NULL DEFAULT -1,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    secret_key CHAR(36)
);`, (err, res) => {
  if (err) {
      throw err
  };
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
