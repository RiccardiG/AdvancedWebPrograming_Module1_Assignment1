/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('artist', (table) =>{
    table.increments(`artistID`).primary();
    table.text(`artistName`).notNullable();
    table.text(`artistLabels`).notNullable();
    table.text(`artistDescription`).notNullable();
    table.integer(`artistNumStreamings`).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('artist');
};
