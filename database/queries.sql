-- Select the Name of the track & order it from most played to least played
SELECT trackName FROM assignment.track ORDER BY track.trackNumStreamings DESC;
-- Select the top hits of each genre
SELECT assignment.track.trackName, assignment.genre.genreName FROM assignment.track INNER JOIN assignment.genre ON assignment.track.trackID = assignment.genre.genreTopHit;
-- Select all the pop songs of the database
SELECT DISTINCT assignment.track.trackName FROM assignment.track INNER JOIN assignment.genre ON assignment.track.trackGenre = 'Pop';
-- Select the artist and albums & order it from most listened to least listened to
SELECT assignment.artist.artistName, assignment.album.albumName FROM assignment.artist INNER JOIN assignment.album ON assignment.artist.artistID = assignment.album.artistID ORDER BY assignment.album.albumNumStreamings DESC;