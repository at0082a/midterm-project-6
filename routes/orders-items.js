"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("orders_items")
      .where({order_id: parseInt(req.session.user)})
      .then((results) => {
        res.json(results);
    });
  });

  return router;
}
