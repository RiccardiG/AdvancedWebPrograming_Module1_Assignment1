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
    {trackName: "Dangerous", trackGenre: 'Pop',trackReleaseDate:'01/01/1991',trackNumStreamings:'16000',artistID:'2', albumID:'2'}
  ]);
};
