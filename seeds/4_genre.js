/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('genre').del()
  await knex('genre').insert([
    {genreName: "Rock", genreDescription: 'A genre that appeared in the 1900s and is still loved today', genreTopHit:'1', genreTopArtist:'1'},
    {genreName: "Pop", genreDescription: 'The genre of music that is the most listened to today', genreTopHit:'2', genreTopArtist:'2'},
    {genreName: "Metal", genreDescription: 'A genre that is loved by many and hated by many', genreTopHit:'18', genreTopArtist:'1'},
    {genreName: "Arena Rock", genreDescription: 'A genre of music which can gather fan to fill a sports stadium', genreTopHit:'8', genreTopArtist:'4'}
  ]);
};
