exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('orders_items', function(table){
    table.increments('id');
    table.integer('order_id')
    table.integer('item_id')
    table.string('category_name');
    table.string('item_name');
    table.float('real_price')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('orders_items')
  ])
};
