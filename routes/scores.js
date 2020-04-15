const Router = require('express-promise-router')
const db = require('../db')
var uuid = require('uuid');

const router = new Router();

const NAME_INVALID_MSG =
"Invalid username.  Names are only allowed to be letters, numbers, and spaces.";
const NAME_LENGTH_MSG =
"Invalid username.  Names must be between 1 and 32 characters long.";


// GET request for getting a single user's score.
router.get('/', async (req, res) => {
    const { name } = req.query;
    const { rows } = await db.query(`SELECT points FROM scores
                                     WHERE name = $1
                                     LIMIT 1`, [name]);
    res.send(rows[0]);
})

// POST request for setting a user's score.
router.post('/', async (req, res) => {
    const { points, secretkey } = req.body;
    const { rows } = await db.query(`UPDATE scores
                                     SET points = $1
                                     WHERE secret_key = $2`,
                                     [points, secretkey]);
    res.send();
})

// // GET request for getting a the top 10 scores.
router.get('/topscores', async (req, res) => {
    const { rows } = await db.query(`SELECT name, points FROM scores
                                     WHERE points > -1
                                     ORDER BY points DESC
                                     LIMIT 10`);
    res.send(rows);
})





// POST request for creating a new user entry.
// After checking that the requested name is valid and not in use create a
// secret key and add an entry into the table.  The key is returned to the
// client and is is required to be sent when updating their score.
router.post('/newuser', async (req, res) => {
    const { name } = req.body;
    let errors = { error: null };

    if (name.length > 32 || name.length == 0) {
        errors.error = NAME_LENGTH_MSG;
    }
    else if (/[^a-z0-9 ]/i.test(name)) {
        errors.error = NAME_INVALID_MSG;
    }
    else {
        const { rows } = await db.query(`SELECT points FROM scores
                                         WHERE name = $1
                                         LIMIT 1`, [name]);
        if (rows.length) {
            errors.error = "This username is already in use!.";
        }
        else {
            let secretKey = uuid.v4();
            const { rows } = await db.query(
                `INSERT INTO scores (name, points, secret_key)
                 VALUES ($1, -1, $2)`, [name, secretKey]);
            errors.secretKey = secretKey;
        }
    }

    console.log(errors);
    res.send(errors);
})


module.exports = router;

// Create database
// let sql = "CREATE DATABASE IF NOT EXISTS Avoidance";
// let sql = `CREATE TABLE scores(
//                                id SERIAL PRIMARY KEY,
//                                name VARCHAR(32),
//                                points INT,
//                                created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//                                secret_key CHAR(36)
//                               )`;


// Prune oldest scores
// let sql = `DELETE FROM scores
//            WHERE points < ${tenthPlacePoints}
//            AND created < (NOW - INTERVAL 2 MONTH)`;
