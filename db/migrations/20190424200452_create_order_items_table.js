exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('order_items', function(table){
    table.integer('id').primary().notNullable();
    table.integer('order_id');
    table.integer('item_id');
    table.integer('toppings_id');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('order_items')
  ])
};
