/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async knex => {
  await knex.schema.createTable('strutture', tbl => {
    tbl.text('Nome', 256).notNullable();
    tbl.text('Regione', 256).notNullable();
    tbl.text('Città', 256).notNullable();
    tbl.text('numero', 256).notNullable();
    tbl.specificType('esami', 'text ARRAY').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =  async knex => {
  await knex.schema.dropTableIfExists('strutture');
};
