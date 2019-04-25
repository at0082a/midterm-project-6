exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('order', function(table){
    table.integer('id').primary().notNullable();
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('order')
  ])
};
