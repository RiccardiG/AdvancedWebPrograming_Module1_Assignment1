/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('track').del()
  await knex('track').insert([
    {trackName: "One", trackGenre: 'Rock',trackReleaseDate:'01/01/1988',trackNumStreamings:'320000',artistID:'1', albumID:'1'},
    {trackName: "Black or White", trackGenre: 'Pop',trackReleaseDate:'01/01/1991',trackNumStreamings:'82000',artistID:'2', albumID:'2'},
    {trackName: "Enter Sandman", trackGenre: 'Rock',trackReleaseDate:'01/01/1988',trackNumStreamings:'420000',artistID:'1', albumID:'1'},
    {trackName: "Dangerous", trackGenre: 'Pop',trackReleaseDate:'01/01/1991',trackNumStreamings:'16000',artistID:'2', albumID:'2'},
    {trackName: "We Will Rock You", trackGenre: 'Arena Rock',trackReleaseDate:'07/10/1977',trackNumStreamings:'620000',artistID:'4', albumID:'8'},
    {trackName: "We Are The Champions", trackGenre: 'Arena Rock',trackReleaseDate:'07/10/1977',trackNumStreamings:'464000',artistID:'4', albumID:'8'},
    {trackName: "Sheer Heart Attack", trackGenre: 'Arena Rock',trackReleaseDate:'07/10/1977',trackNumStreamings:'13000',artistID:'4', albumID:'8'},
    {trackName: "Bohemian Rhapsody", trackGenre: 'Arena Rock',trackReleaseDate:'11/21/1975',trackNumStreamings:'1000000000',artistID:'4', albumID:'7'},
    {trackName: "Love Of My Life", trackGenre: 'Arena Rock',trackReleaseDate:'11/21/1975',trackNumStreamings:'1000000',artistID:'4', albumID:'7'},
    {trackName: "Come Together", trackGenre: 'Rock',trackReleaseDate:'11/12/1969',trackNumStreamings:'1200000',artistID:'3', albumID:'6'},
    {trackName: "Something", trackGenre: 'Rock',trackReleaseDate:'12/11/1969',trackNumStreamings:'1000000',artistID:'3', albumID:'6'},
    {trackName: "Maxwell's Silver Hammer", trackGenre: 'Rock',trackReleaseDate:'12/11/1969',trackNumStreamings:'1000000',artistID:'3', albumID:'6'},
    {trackName: "Only A Northern Song", trackGenre: 'Rock',trackReleaseDate:'01/01/1969',trackNumStreamings:'13000000',artistID:'3', albumID:'5'},
    {trackName: "All Together Now", trackGenre: 'Rock',trackReleaseDate:'01/13/1969',trackNumStreamings:'10000000',artistID:'3', albumID:'5'},
    {trackName: "Thriller", trackGenre: 'Pop',trackReleaseDate:'11/30/1982',trackNumStreamings:'1500000000',artistID:'2', albumID:'4'},
    {trackName: "Beat It", trackGenre: 'Pop',trackReleaseDate:'11/30/1982',trackNumStreamings:'650000000',artistID:'2', albumID:'4'},
    {trackName: "Billie Jean", trackGenre: 'Pop',trackReleaseDate:'11/30/1982',trackNumStreamings:'750000000',artistID:'2', albumID:'4'},
    {trackName: "Master Of Puppets", trackGenre: 'Metal',trackReleaseDate:'02/07/1987',trackNumStreamings:'620000',artistID:'1', albumID:'3'},
    {trackName: "Battery", trackGenre: 'Metal',trackReleaseDate:'02/07/1987',trackNumStreamings:'320000',artistID:'1', albumID:'3'}, 
  ]);
};
