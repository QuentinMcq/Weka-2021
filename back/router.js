const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const auth = require('./auth.js')();
const cfg = require('./config.js');
const pool = require('./data/pg');

const saltRounds = 10;

const router = express.Router();
module.exports = router;

router
    .use(auth.initialize());

router
    .get('/', (req, res) => {
        res.json("Page d'accueil");
    })

    /*.post('/signup', async (req, res) => {
        try {
            bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
                const result = await pool.query(
                    'insert into player(player_name, player_password) values ($1, $2) returning player_id',
                    [req.body.name, hash]
                );

                return res.sendStatus(201);
            });

        } catch (err) {
            console.error('ERROR SIGNUP:', err);
            res.sendStatus(401);
        }
    })

    .post("/token", async (req, res) => {
        try {
            const result = await pool.query('select player_id, player_password from player where player_name = $1', [req.body.player_name]);
            const match = await bcrypt.compare(req.body.player_password, result.rows[0].player_password);

            if (match) {
                const token = jwt.sign({
                    id: result.rows[0].player_id
                }, cfg.jwtSecret, {
                    expiresIn: '1h'
                });

                return res.json({
                    token: token
                });
            }

            res.sendStatus(200);

        } catch (err) {
            console.error("ERROR TOKEN:", err);
            res.sendStatus(401);
        }
    })
*/
    .get('/quiz',
        async (req, res) => {
            try {
                const result = await pool.query('select * from quiz');
                res.json(result.rows);
            } catch (err) {
                console.error(err);
                res.sendStatus(500);
            }
        })

    .get('/quiz/:id',
        async (req, res) => {
            try {
                const result = await pool.query('select * from question as q where q.quiz_id = ' + req.params.id);
                res.json(result.rows);
            } catch (err) {
                console.error(err);
                res.sendStatus(500);
            }
        })

    .delete('/quiz/:id',
        async (req, res) => {
            try {
                const result = await pool.query('delete from quiz where quiz_id = ' + req.params.id);
                res.json(result.rows);
            } catch (err) {
                console.error(err);
                res.sendStatus(500);
                console.log(err)
            }
        })

    .get('/theme',
        async (req, res) => {
            try {
                const result = await pool.query('select * from theme');
                res.json(result.rows);
            } catch (err) {
                console.error(err);
                res.sendStatus(500);
            }
        })

    .get('/player',
        async (req, res) => {
            try {
                const result = await pool.query('select * from player');
                res.json(result.rows);
            } catch (err) {
                console.error(err);
                res.sendStatus(500);
            }
        })

    .use((req, res) => {
        res.status(404);
        res.json({
            error: 'Page not found'
        });
    });
