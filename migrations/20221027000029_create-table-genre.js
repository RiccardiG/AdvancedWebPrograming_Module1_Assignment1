/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('genre', (table) =>{
        table.increments(`genreID`).primary();
        table.text(`genreName`).notNullable();
        table.text(`genreDescription`).notNullable();        
        table.integer(`genreTopHit`).notNullable();
        table.foreign(`genreTopHit`).references('trackID').inTable('track');
        table.integer(`genreTopArtist`).notNullable();
        table.foreign(`genreTopArtist`).references('artistID').inTable('artist');
      });  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('genre');
};
