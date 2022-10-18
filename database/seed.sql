-- Your seed code goes in here
INSERT INTO assignment.artist (artistID, artistName, artistLabels, artistDescription, artistNumStreamings) VALUES ('1','Metallica', 'Megaforce', 'One of, if not the best rockband of human history', '1300000000'),('2','Michael Jackson', 'Steeltown', 'The king of pop', '30000000');

INSERT INTO assignment.album (albumID, albumName, numTracks, albumReleaseDate,albumNumStreamings, artistID) VALUES ('1','...And Justice for ALL', '18', '01/01/1988', '30000000', '1'),('2','Dangerous', '15', '01/01/1991', '2800000','2');

INSERT INTO assignment.track (trackID, trackName, trackGenre, trackReleaseDate,trackNumStreamings, artistID, albumID) VALUES ('1','One', 'Rock', '01/01/1988', '320000','1','1'),('2','Black or White', 'Pop', '01/01/1991', '82000','2','2');
INSERT INTO assignment.track (trackID, trackName, trackGenre, trackReleaseDate,trackNumStreamings, artistID, albumID) VALUES ('3','Enter Sandman', 'Rock', '01/01/1988', '34000','1','1'),('4','Dangerous', 'Pop', '01/01/1991', '9200','2','2');

INSERT INTO assignment.genre (genreID, genreName,genreDescription, genreTopHit, genreTopArtist) VALUES ('1','Rock', 'A genre that appeared in the 1900s and is still loved today', '1', '1'),('2','Pop', 'The genre of music that is the most listened to today', '2', '2');
