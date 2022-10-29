const knex = require('./knex');

module.exports = {
    getAll(){
        return knex('track');
    },
    getAllArtist(){
        return knex('artist');
    },
    getAllAlbum(){
        return knex('album');
    },
    getAllGenre(){
        return knex('genre');
    },
    //for the following using the .raw is not recommended however, that is for the time being the way I found it to work.
    getMostPlayed(){
        return knex.select('trackName').from('track').orderBy('trackNumStreamings', 'desc');
        //return knex.raw("SELECT public.track.trackName FROM public.track ORDER BY public.track.trackNumStreamings DESC;");
    },
    getTopHits(){
        return knex.select('trackName', 'genreName').from('track').innerJoin('genre', 'track.trackID', 'genre.genreTopHit');
        //return knex.raw("SELECT  track.trackName,  genre.genreName FROM track INNER JOIN  genre ON  track.trackID =  genre.genreTopHit;");
    },
    getAllPop(){
        return knex.raw("SELECT DISTINCT  track.trackName FROM  track INNER JOIN  genre ON  track.trackGenre = 'Pop';");
    },
    getArtistAndAlbum(){
        return knex.raw("SELECT  artist.artistName,  album.albumName FROM  artist INNER JOIN  album ON  artist.artistID =  album.artistID ORDER BY  album.albumNumStreamings DESC;");
    },
    create(track){
        return knex('track').insert(track,'*');
    },
    createArtist(artist){
        return knex('artist').insert(artist, '*');
    },
    createAlbum(album){
        return knex('album').insert(album, '*');
    },
    createGenre(genre){
        return knex('genre').insert(genre, '*');
    },
    delete(id){
        return knex('track').where('trackID', id).del();
    },
    deleteArtist(id){
        return knex('artist').where('artistID', id).del();
    },
    deleteAlbum(id){
        return knex('album').where('albumID', id).del();
    },
    deleteGenre(id){
        return knex('genre').where('genreID', id).del();
    },
    update(id, track){
        return knex('track').where('trackID', id).update(track);
    },
    updateArtist(id, artist){
        return knex('artist').where('artistID', id).update(artist);
    },
    updateGenre(id, genre){
        return knex('genre').where('genreID', id).update(genre);
    },
    updateAlbum(id, album){
        return knex('album').where('albumID', id).update(album);
    }
}