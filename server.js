"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');
const cookieSession = require('cookie-session')

// Seperated Routes for each Resource
const itemsRoutes = require("./routes/items");
const ordersRoutes = require("./routes/orders")

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.set("view engine", "ejs");

// <---------Functions---------->

function generateRandomString() {
  var text = "";
  var possible = "01234567";
  for (var i = 0; i < 7; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return parseInt(text);
}

// <-------------GET ROUTES------------------>

// Mount all resource routes
app.use("/api/menu", itemsRoutes(knex));
app.use("/api/order", itemsR )

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

// Menu page
app.get("/menu", (req, res) => {
  res.render("menu");
});

//Order page
app.get("/order", (req, res) => {
  res.render("order");
});

//Checkout Page
app.get("/checkout", (req, res) => {
  res.render("checkout");
})

//Create your own pizza page
app.get("/menu/create-your-own", (req, res) => {
  res.render("create");
});

// <--------POST ROUTES---------->

app.post("/", (req, res) => {
  let cookie = generateRandomString();
  req.session.user = cookie;
res.redirect("/menu");
});

app.post("/menu", (req, res) => {

  if (req.session.user) {
    let id = generateRandomString();
  }
  res.redirect("/order");
});

app.post("/order", (req, res) => {
  res.redirect("/checkout");
});

app.post("/order/:id/delete", (req, res) => {
  delete
res.redirect("/");
});


app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
