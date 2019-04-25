
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('items', function(table){
      table.foreign('category_id').references('id').inTable('categories');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('items', function(table){
      table.dropForeign(columns, 'category_id');
    })
  ])
};
