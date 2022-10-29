
function addTrack(){
    
    
    const trackName = document.getElementById('songTitle').value;
    const trackGenre = document.getElementById('songGenre').value;
    const trackReleaseDate = document.getElementById('songReleaseDate').value;
    const trackNumStreamings = document.getElementById('songNumStreamings').value;
    const artistID= document.getElementById('songArtistID').value;
    const albumID = document.getElementById('songAlbumID').value;

    const data = {trackName, trackGenre, trackReleaseDate, trackNumStreamings, artistID, albumID};
    const options = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('/api/v1/track/post', options);
}
function addArtist(){
    
    const artistName = document.getElementById('artistName').value;
    const artistLabels = document.getElementById('artistLabels').value;
    const artistDescription = document.getElementById('artistDescription').value;
    const artistNumStreamings = document.getElementById('artistNumStreamings').value;
    

    const data = {artistName, artistLabels, artistDescription, artistNumStreamings};
    const options = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('/api/v1/artist/post', options);
}

function addAlbum(){
    const albumName = document.getElementById('albumName').value;
    const numTracks = document.getElementById('numTracks').value;
    const albumNumStreamings = document.getElementById('albumNumStreamings').value;
    const albumReleaseDate = document.getElementById('albumReleaseDate').value;
    const artistID = document.getElementById('albumArtistID').value;
    

    const data = {albumName, numTracks, albumNumStreamings,albumReleaseDate, artistID};
    const options = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('/api/v1/album/post', options);
}

function delArtist(){
    const artistID = document.getElementById('artistID').value;
    data = {artistID};
    const options = {
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('/api/v1/artist/'+artistID, options);
}
function delAlbum(){
    const albumID = document.getElementById('albumID').value;
    data = {albumID};
    const options = {
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('/api/v1/album/'+albumID, options);
}

function delTrack(){
    const trackid = document.getElementById('floatingSongId').value;
    data = {trackid};
    const options = {
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('/api/v1/track/'+trackid, options);
}

function updateArtist(){
    const artistID = document.getElementById('artistID1').value;
    const artistName = document.getElementById('artistName1').value;
    const artistLabels = document.getElementById('artistLabels1').value;
    const artistDescription = document.getElementById('artistDescription1').value;
    const artistNumStreamings = document.getElementById('artistNumStreamings1').value;
    data = {artistName,artistLabels,artistDescription,artistNumStreamings};

    const options = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('/api/v1/artist/'+artistID, options);
}

function updateAlbum(){
    const albumID = document.getElementById('albumID1').value;
    const albumName = document.getElementById('albumName1').value;
    const numTracks = document.getElementById('numTracks1').value;
    const albumNumStreamings = document.getElementById('albumNumStreamings1').value;
    const albumReleaseDate = document.getElementById('albumReleaseDate1').value;
    const artistID = document.getElementById('albumArtistID1').value;
    data = {albumName,numTracks,albumNumStreamings,albumReleaseDate, artistID};

    const options = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('/api/v1/album/'+albumID, options);
}


function updateTrack(){
    const trackID = document.getElementById('songID1').value;
    const trackName = document.getElementById('songTitle1').value;
    const trackGenre = document.getElementById('songGenre1').value;
    const trackReleaseDate = document.getElementById('songReleaseDate1').value;
    const trackNumStreamings = document.getElementById('songNumStreamings1').value;
    const  artistID= document.getElementById('songArtistID1').value;
    const albumID = document.getElementById('songAlbumID1').value;
    data = {trackName,trackGenre,trackReleaseDate,trackNumStreamings,artistID,albumID};

    const options = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('/api/v1/track/'+trackID, options);
}

function addGenre(){
    
    const genreName = document.getElementById('genreName').value;
    const genreDescription = document.getElementById('genreDescription').value;
    const genreTopHit = document.getElementById('genreTopHit').value;
    const genreTopArtist = document.getElementById('genreTopArtist').value;
    

    const data = {genreName, genreDescription, genreTopHit, genreTopArtist};
    const options = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('/api/v1/genre/post', options);
}

function delGenre(){
    const genreID = document.getElementById('genreID').value;
    data = {genreID};
    const options = {
        method : 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('/api/v1/genre/'+genreID, options);
}

function updateGenre(){
    const genreID = document.getElementById('genreID1').value;
    const genreName = document.getElementById('genreName1').value;
    const genreDescription = document.getElementById('genreDescription1').value;
    const genreTopHit = document.getElementById('genreTopHit1').value;
    const genreTopArtist = document.getElementById('genreTopArtist1').value;
    
    data = {genreName,genreDescription,genreTopHit,genreTopArtist};

    const options = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('/api/v1/genre/'+genreID, options);
}
