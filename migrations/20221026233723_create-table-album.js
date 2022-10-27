/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('album', (table) =>{
        table.increments(`albumID`).primary();
        table.text(`albumName`).notNullable();
        table.integer(`numTracks`).notNullable();
        table.date(`albumReleaseDate`).notNullable();
        table.text(`artistLabels`).notNullable();
        table.text(`artistDescription`).notNullable();
        table.integer(`albumNumStreamings`).notNullable();
        table.integer(`artistID`).notNullable();
        table.foreign(`artistID`).references('artistID').inTable('artist');
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('album');
};
