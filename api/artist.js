const express = require('express');

const router = express.Router();

const queries = require('../database/queries.js');
const { response } = require('../index.js');

router.get('/', (req, res) => {
    queries.getAllArtist().then(tracks => {
        res.json(tracks);
    });
});

router.post('/post', (request, response, next) =>{
    queries.createArtist(request.body).then(track =>{
        response.json(track[0]);
    });
});

router.delete('/:id', (request, response)=>{
    queries.deleteArtist(request.params.id).then(()=>{
        response.json({
            deleted: true
        });
    });
});

router.put('/:id', (request, response)=>{
    queries.updateArtist(request.params.id, request.body).then(tracks =>{
        response.json(tracks[0]);
    });
});

module.exports = router;