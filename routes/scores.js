// /scores endpoint for updating user score information

const Router = require("express-promise-router");
const db = require("../db");
var uuid = require("uuid");

const router = new Router();

const NAME_INVALID_MSG =
  "Invalid username.  Names are only allowed to contain letters, numbers, " +
  "and spaces.";
const NAME_LENGTH_MSG =
  "Invalid username.  Names must be between 1 and 32 " + "characters long.";
const NAME_IN_USE_MSG = "This username is already in use!.";
const CHAR_TYPE_INVALID_MSG = "Invalid character type entered.";
const MAX_POSSIBLE_SCORE = 10000;
const TOTAL_CHARACTER_TYPES = 3;
const CHAR_TYPE_RANGE_MSG = `Value of characterType must be within 0 - ${
  TOTAL_CHARACTER_TYPES - 1
}`;
const SCORE_RANGE_MSG = `Valid score range is from -1 to ${MAX_POSSIBLE_SCORE}`;

// GET request for getting a single user's score.
router.get("/", async (req, res) => {
  const { name } = req.query;
  const { rows } = await db.query(
    `SELECT character_type, total_score, health_score, social_score
     FROM scores
     WHERE name = $1
     LIMIT 1`,
    [name]
  );
  res.send(rows[0]);
});

// POST request for setting a user's score.
router.post("/", async (req, res) => {
  const { totalScore, healthScore, socialScore, secretKey } = req.body;
  let output = { error: null };
  for (let score of [totalScore, healthScore, socialScore]) {
    score = parseInt(score);
    if (score.isNaN || score < 0 || score > TOTAL_CHARACTER_TYPES - 1) {
      output.error = SCORE_RANGE_MSG;
      res.send(output);
      return;
    }
  }
  const { rows } = await db.query(
    `UPDATE scores
     SET total_score = $1,
         health_score = $2,
         social_score = $3
     WHERE secret_key = $4`,
    [totalScore, healthScore, socialScore, secretKey]
  );

  res.send(output);
});

// // GET request for getting a the top 10 scores.
router.get("/topscores", async (req, res) => {
  const { rows } = await db.query(
    `SELECT name, character_type, total_score, health_score, social_score
     FROM scores
     WHERE total_score > -1
     ORDER BY total_score DESC
     LIMIT 10`
  );
  res.send(rows);
});

// POST request for creating a new user entry.
// After checking that the requested name is valid and not in use create a
// secret key and add an entry into the table.  The key is returned to the
// client and is is required to be sent when updating their score.
router.post("/newuser", async (req, res) => {
  let { name, characterType } = req.body;
  let output = { error: null };

  name = name.trim();
  try {
    characterType = parseInt(characterType);
    if (
      characterType.isNaN ||
      characterType < 0 ||
      characterType > TOTAL_CHARACTER_TYPES - 1
    ) {
      throw CHAR_TYPE_RANGE_MSG;
    }
  } catch (err) {
    output.error = CHAR_TYPE_RANGE_MSG;
    res.send(output);
    return;
  }

  if (name.length > 32 || name.length == 0) {
    output.error = NAME_LENGTH_MSG;
  } else if (/[^a-z0-9 ]/i.test(name)) {
    output.error = NAME_INVALID_MSG;
  } else {
    const existingUser = await db.query(
      `SELECT 1 FROM scores
                                             WHERE name = $1`,
      [name]
    );
    if (existingUser.rows.length) {
      output.error = NAME_IN_USE_MSG;
    } else {
      // Create a new user if the username was valid.  All score columns
      // for this user will be set to -1 by default to indicate that the
      // user has no score recorded yet.
      let secretKey = uuid.v4();
      const { rows } = await db.query(
        `INSERT INTO scores (name, character_type, secret_key)
                 VALUES ($1, $2, $3)`,
        [name, characterType, secretKey]
      );
      output.secret_key = secretKey;
    }
  }

  res.send(output);
});

module.exports = router;

// Create database
/*
CREATE TABLE scores(
    id SERIAL PRIMARY KEY,
    name VARCHAR(32) NOT NULL,
    character_type INT NOT NULL,
    total_score INT NOT NULL DEFAULT -1,
    health_score INT NOT NULL DEFAULT -1,
    social_score INT NOT NULL DEFAULT -1,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    secret_key CHAR(36)
);
*/

// Prune oldest scores
// let sql = `DELETE FROM scores
//            WHERE points < ${tenthPlacePoints}
//            AND created < (NOW - INTERVAL 2 MONTH)`;
