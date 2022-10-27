/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('artist').del()
  await knex('artist').insert([
    {artistName: "Metallica", artistLabels: 'Megaforce', artistDescription: 'One of, if not the best rockband of human history', artistNumStreamings: '1300000000'},
    {artistName: "Michael Jackson", artistLabels: 'Steeltown', artistDescription: 'The king of pop', artistNumStreamings: '30000000'}
  ]);
};
