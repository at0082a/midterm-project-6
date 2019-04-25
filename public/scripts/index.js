  const pg = require("pg");
  // const settings = require("../.env"); // settings.json

  const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
    host : 'localhost',
    user : 'labber',
    password : 'labber',
    database : 'midterm',
    }
  });

  var query = knex.select('*').from('items')

  query.then(function(results) {
    console.log(results);
  })
  .catch(function(error) {
    console.error(error)
  });
