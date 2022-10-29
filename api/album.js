const express = require('express');

const router = express.Router();

const queries = require('../database/queries.js');
const { response } = require('../index.js');

router.get('/', (req, res) => {
    queries.getAllAlbum().then(tracks => {
        res.json(tracks);
    });
});
router.post('/post', (request, response, next) =>{
    queries.createAlbum(request.body).then(track =>{
        response.json(track[0]);
    });
});

router.delete('/:id', (request, response)=>{
    queries.deleteAlbum(request.params.id).then(()=>{
        response.json({
            deleted: true
        });
    });
});

router.put('/:id', (request, response)=>{
    queries.updateAlbum(request.params.id, request.body).then(tracks =>{
        response.json(tracks[0]);
    });
});

module.exports = router;