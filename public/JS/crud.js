
function addTrack(){
    const trackid = document.getElementById('songID').value;
    const trackname = document.getElementById('songTitle').value;
    const trackgenre = document.getElementById('songGenre').value;
    const trackreleasedate = document.getElementById('songReleaseDate').value;
    const tracknumstreamings = document.getElementById('songNumStreamings').value;
    const artistid = document.getElementById('songArtistID').value;
    const albumid = document.getElementById('songAlbumID').value;

    const data = {trackid, trackname, trackgenre, trackreleasedate, tracknumstreamings, artistid, albumid};
    const options = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('/api/v1/track/post', options);
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

function updateTrack(){
    const trackid = document.getElementById('songID1').value;
    const trackname = document.getElementById('songTitle1').value;
    const trackgenre = document.getElementById('songGenre1').value;
    const trackreleasedate = document.getElementById('songReleaseDate1').value;
    const tracknumstreamings = document.getElementById('songNumStreamings1').value;
    const artistid = document.getElementById('songArtistID1').value;
    const albumid = document.getElementById('songAlbumID1').value;
    data = {trackname,trackgenre,trackreleasedate,tracknumstreamings,artistid,albumid};

    const options = {
        method : 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
    }
    fetch('/api/v1/track/'+trackid, options);
}