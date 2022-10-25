const express = require('express');

const router = express.Router();

const queries = require('../database/queries.js');
const { response } = require('../index.js');

router.get('/', (req, res) => {
    queries.getAll().then(tracks => {
        res.json(tracks);
    });
});

router.get('/most-played', (req, res) => {
    queries.getMostPlayed().then(tracks => {
        res.json(tracks);
    });
});

router.get('/top-hits', (req, res) => {
    queries.getTopHits().then(tracks => {
        res.json(tracks);
    });
});

router.get('/pop', (req, res) => {
    queries.getAllPop().then(tracks => {
        res.json(tracks);
    });
});

router.get('/artist-and-album', (req, res) => {
    queries.getArtistAndAlbum().then(tracks => {
        res.json(tracks);
    });
});

router.post('/post', (request, response, next) =>{
    queries.create(request.body).then(track =>{
        response.json(track[0]);
    });
});

router.delete('/:id', (request, response)=>{
    queries.delete(request.params.id).then(()=>{
        response.json({
            deleted: true
        });
    });
});

router.put('/:id', (request, response)=>{
    queries.update(request.params.id, request.body).then(tracks =>{
        response.json(tracks[0]);
    });
});


module.exports = router;