const express = require("express");
const db = require('../back/data/pg');
const router = express.Router();

module.exports = router;

router
    .get("/", (req, res) => {
        res.json("Page d'accueil");
    });

router
    .get('/quiz',
        async (req, res) => {
            try {
                const result = await db.query('select * from weka.quiz');
                res.json(result.rows);
            } catch (err) {
                console.error(err);
                res.sendStatus(500);
            }
        });

router
    .get('/quiz/:id',
        async (req, res) => {
            try {
                const result = await db.query('select * from weka.question as q where q.quiz_id='+req.params.id +
                    ' ');
                res.json(result.rows);
            } catch (err) {
                console.error(err);
                res.sendStatus(500);
            }
        });

router
    .get('/user',
        async (req, res) => {
            try {
                const result = await db.query('select * from weka.player');
                res.json(result.rows);
            } catch (err) {
                console.error(err);
                res.sendStatus(500);
            }
        });

router
    .get('/word',
        async (req, res) => {
            try {
                const result = await db.query('select * from weka.key_word');
                res.json(result.rows);
            } catch (err) {
                console.error(err);
                res.sendStatus(500);
            }
        });


router
    .use((req, res) => {
        res.status(404);
        res.json({
            error: "Page not found"
        });
    });
