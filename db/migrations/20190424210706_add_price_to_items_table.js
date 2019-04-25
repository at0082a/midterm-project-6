exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('items', function(table){
      table.integer('price');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.alterTable('items', function(table){
      table.dropColumns('price');
    })
  ])
};


