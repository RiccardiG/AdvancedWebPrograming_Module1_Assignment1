const { addTrack } = require('../services/tracks');
const knex = require('./knex');

module.exports = {
    getAll(){
        return knex('assignment.track');
    },
    //for the following using the .raw is not recommended however, that is for the time being the way I found it to work.
    getMostPlayed(){
        return knex.raw("SELECT trackName FROM assignment.track ORDER BY track.trackNumStreamings DESC;");
    },
    getTopHits(){
        return knex.raw("SELECT assignment.track.trackName, assignment.genre.genreName FROM assignment.track INNER JOIN assignment.genre ON assignment.track.trackID = assignment.genre.genreTopHit;");
    },
    getAllPop(){
        return knex.raw("SELECT DISTINCT assignment.track.trackName FROM assignment.track INNER JOIN assignment.genre ON assignment.track.trackGenre = 'Pop';");
    },
    getArtistAndAlbum(){
        return knex.raw("SELECT assignment.artist.artistName, assignment.album.albumName FROM assignment.artist INNER JOIN assignment.album ON assignment.artist.artistID = assignment.album.artistID ORDER BY assignment.album.albumNumStreamings DESC;");
    },
    create(track){
        return knex('assignment.track').insert(track,'*');
    },
    delete(id){
        return knex('assignment.track').where('trackid', id).del();
    },
    update(id, track){
        return knex('assignment.track').where('trackid', id).update(track);
    }
}