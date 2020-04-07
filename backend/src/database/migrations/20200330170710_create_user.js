
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
    table.string('phone').notNullable();
    table.boolean('active').default(true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
