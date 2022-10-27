/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('album').del()
  await knex('album').insert([
    {albumName: "...And Justice for ALL", numTracks: '18', albumReleaseDate:'01/01/1988', albumNumStreamings:'30000000', artistID: '1'},
    {albumName: "Dangerous", numTracks: '15', albumReleaseDate:'01/01/1991', albumNumStreamings:'2800000', artistID: '2'}
  ]);
};
