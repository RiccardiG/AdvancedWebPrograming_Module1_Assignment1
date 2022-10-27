/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('track', (table) =>{
        table.increments(`trackID`).primary();
        table.text(`trackName`).notNullable();
        table.text(`trackGenre`).notNullable();
        table.date(`trackReleaseDate`).notNullable();
        table.integer(`trackNumStreamings`).notNullable();
        table.integer(`artistID`).notNullable();
        table.foreign(`artistID`).references('artistID').inTable('artist');
        table.integer(`albumID`).notNullable();
        table.foreign(`albumID`).references('albumID').inTable('album');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('track');
};
