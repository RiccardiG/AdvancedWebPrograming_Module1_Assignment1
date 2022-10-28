const express = require('express');

const router = express.Router();

const queries = require('../database/queries.js');
const { response } = require('../index.js');

router.get('/', (req, res) => {
    queries.getAllGenre().then(tracks => {
        res.json(tracks);
    });
});

module.exports = router;