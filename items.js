
var knex = require('knex')({
    client: 'pg',
    version: '9.5.10',
    connection: {
      host : 'localhost',
      user : 'labber',
      password : 'labber',
      database : 'midterm'
    }
  });

  console.log(knex);

  var query = knex.select("*").from("orders");

  query.then(function(results) {

    results.forEach(item => {
        console.log(item);
    })
});