const express = require("express");
const db = require('../back/data/pg');
const router = express.Router();

module.exports = router;

router
    .get("/", (req, res) => {
        res.json("Page d'accueil");
    });

router
    .get("/hello", (req, res) => {
        res.json("Hellow World!");
    });

router
    .get('/persons',
        async (req, res) => {
            try {
                const result = await db.query('select * from person');
                res.json(result.rows);
            } catch (err) {
                console.error(err);
                res.sendStatus(500);
            }
        });

router
    .get('/objects',
        async (req, res) => {
            try {
                const result = await db.query('select * from object');
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
