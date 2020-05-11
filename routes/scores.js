// "/scores" endpoint for updating user score information

const Router = require("express-promise-router");
const db = require("../db");
var uuid = require("uuid");

const router = new Router();

const NAME_INVALID_MSG =
  "Invalid username.  Names are only allowed to contain letters, numbers, " +
  "and spaces.";
const NAME_LENGTH_MSG =
  "Invalid username.  Names must be between 1 and 32 " + "characters long.";
const CHAR_TYPE_INVALID_MSG = "Invalid character type entered.";
const MIN_POSSIBLE_SCORE = -10000;
const MAX_POSSIBLE_SCORE = 10000;
const TOTAL_CHARACTER_TYPES = 3;
const CHAR_TYPE_RANGE_MSG = `Value of characterType must be within 0 - ${
  TOTAL_CHARACTER_TYPES - 1
}`;
const SCORE_RANGE_MSG = `Valid score range is from ${MIN_POSSIBLE_SCORE} to ${MAX_POSSIBLE_SCORE}`;

// GET request for getting a single user's score.
router.get("/", async (req, res) => {
  let output = { error: null };
  const name = req.query.name;
  const { rows } = await db.query(
    `SELECT character_type, total_score, health_score, social_score
     FROM scores
     WHERE name = $1`,
    [name]
  );
  if (rows.length) {
    output.scores = rows[0];
  } else {
    output.error = "Name not found in database.";
  }
  res.send(output);
});

// POST request for entering a new user into the database.  The request must
// include their name, character type, and the three score values.
router.post("/", async (req, res) => {
  let output = { error: null };
  let name = "";
  try {
    name = req.body.name.trim();
  } catch (err) {}
  let ts = parseInt(req.body.totalScore);
  let hs = parseInt(req.body.healthScore);
  let ss = parseInt(req.body.socialScore);
  let ct = parseInt(req.body.characterType);

  for (let err of [
    getNameErrors(name),
    getScoreErrors(ts, hs, ss),
    getCharTypeErrors(ct),
  ]) {
    if (err != null) {
      output.error = err;
      res.send(output);
      return;
    }
  }

  const { rows } = await db.query(
    `INSERT INTO scores
     (name, character_type, total_score, health_score, social_score)
     VALUES ($1, $2, $3, $4, $5)`,
    [name, ct, ts, hs, ss]
  );

  res.send(output);
});

// GET request for getting the top 10 scores.
router.get("/topscores", async (req, res) => {
  const { rows } = await db.query(
    `SELECT name, character_type, total_score, health_score, social_score
     FROM scores
     WHERE total_score > ${MIN_POSSIBLE_SCORE}
     ORDER BY total_score DESC
     LIMIT 10`
  );
  res.send(rows);
});

function getNameErrors(name) {
  if (name.length > 32 || name.length == 0) {
    return NAME_LENGTH_MSG;
  } else if (/[^a-z0-9 ]/i.test(name)) {
    return NAME_INVALID_MSG;
  }
  return null;
}

function getScoreErrors(totalScore, healthScore, socialScore) {
  for (let score of arguments) {
    if (score.isNaN || score < 0 || score > MAX_POSSIBLE_SCORE) {
      return SCORE_RANGE_MSG;
    }
  }
  return null;
}

function getCharTypeErrors(ct) {
  if (ct.isNaN || ct < 0 || ct > TOTAL_CHARACTER_TYPES - 1) {
    return CHAR_TYPE_RANGE_MSG;
  }
  return null;
}

module.exports = router;

// Create database
/*
CREATE TABLE scores(
    id SERIAL PRIMARY KEY,
    name VARCHAR(32) NOT NULL,
    character_type INT NOT NULL,
    total_score INT NOT NULL DEFAULT -10000,
    health_score INT NOT NULL DEFAULT -10000,
    social_score INT NOT NULL DEFAULT -10000,
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
*/

// Prune oldest scores
// let sql = `DELETE FROM scores
//            WHERE points < ${tenthPlacePoints}
//            AND created < (NOW - INTERVAL 2 MONTH)`;
