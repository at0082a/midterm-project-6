
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('order_items', function(table){
      table.foreign('order_id').references('id').inTable('orders');
      table.foreign('item_id').references('id').inTable('items');
      table.foreign('toppings_id').references('id').inTable('toppings');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('order_items', function(table){
      table.dropForeign(columns, 'order_id');
      table.dropForeign(columns, 'item_id');
      table.dropForeign(columns, 'toppings_id');
    })
  ])
};
