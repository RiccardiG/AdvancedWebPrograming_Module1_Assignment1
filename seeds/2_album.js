/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('album').del()
  await knex('album').insert([
    {albumName: "...And Justice for ALL", numTracks: '18', albumReleaseDate:'01/01/1988', albumNumStreamings:'30000000', artistID: '1'},
    {albumName: "Dangerous", numTracks: '15', albumReleaseDate:'01/01/1991', albumNumStreamings:'2800000', artistID: '2'},
    {albumName: "Master Of Puppets", numTracks: '10', albumReleaseDate:'02/07/1987', albumNumStreamings:'620000', artistID: '1'},
    {albumName: "Thriller", numTracks: '7', albumReleaseDate:'11/30/1982', albumNumStreamings:'1500000', artistID: '2'},
    {albumName: "Yellow Submarine", numTracks: '13', albumReleaseDate:'01/12/1969', albumNumStreamings:'2000000', artistID: '3'},
    {albumName: "Abbey Road", numTracks: '17', albumReleaseDate:'12/09/1969', albumNumStreamings:'60000000', artistID: '3'},
    {albumName: "A Night At The Opera", numTracks: '12', albumReleaseDate:'11/21/1975', albumNumStreamings:'50000000', artistID: '4'},
    {albumName: "News Of The World", numTracks: '12', albumReleaseDate:'09/28/1977', albumNumStreamings:'40000000', artistID: '4'},
    
  ]);
};
