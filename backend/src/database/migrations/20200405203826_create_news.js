
exports.up = function(knex) {
  return knex.schema.createTable('news', function(table) {
    table.increments('id').primary();
    table.string('title');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('news');
};
