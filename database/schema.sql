CREATE TABLE assignment.artist(
	artistID INTEGER PRIMARY KEY,
    artistName VARCHAR(40) NOT NULL,
    artistLabels TEXT NOT NULL,
    artistDescription TEXT NOT NULL,
    artistNumStreamings INTEGER NOT NULL
);

CREATE TABLE assignment.album(
	albumID INTEGER PRIMARY KEY,
    albumName TEXT NOT NULL,
	numTracks INTEGER NOT NULL,
	albumReleaseDate DATE NOT NULL,
    albumNumStreamings INTEGER NOT NULL,
	artistID INTEGER NOT NULL,
    CONSTRAINT artistID_FK FOREIGN KEY (artistID) REFERENCES assignment.artist (artistID)
);

CREATE TABLE assignment.track(
	trackID INTEGER PRIMARY KEY,
    trackName TEXT NOT NULL,
	trackGenre TEXT NOT NULL,
	trackReleaseDate DATE NOT NULL,
    trackNumStreamings INTEGER NOT NULL,
	artistID INTEGER NOT NULL,
    albumID INTEGER NOT NULL,
    CONSTRAINT artistID_FK1 FOREIGN KEY (artistID) REFERENCES assignment.artist (artistID),
    CONSTRAINT albumID_FK1 FOREIGN KEY (albumID) REFERENCES assignment.album (albumID)
);

CREATE TABLE assignment.genre(
	genreID INTEGER PRIMARY KEY,
    genreName TEXT NOT NULL,
	genreDescription TEXT NOT NULL,
	genreTopHit INTEGER NOT NULL,
    genreTopArtist INTEGER NOT NULL,
    CONSTRAINT genreTopHit_FK FOREIGN KEY (genreTopHit) REFERENCES assignment.track (trackID),
    CONSTRAINT genreTopArtist_FK FOREIGN KEY (genreTopArtist) REFERENCES assignment.artist (artistID)
);