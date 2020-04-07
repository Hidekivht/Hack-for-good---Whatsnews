
exports.up = function(knex) {
  return knex.schema.createTable('sent_list', function(table) {
    table.increments('id').primary();
    table.string('phone').notNullable();
    table.string('news_id').notNullable();

    table.foreign('phone').references('phone').inTable('users');
    table.foreign('news_id').references('id').inTable('news');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('sent_list');
};
