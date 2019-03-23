// REQUIRE
var express = require("express");
var path = require("path");

// tells Node that we're creating an express server
var app = express();

// set port
var PORT = process.env.PORT || 3000;

// sets express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// public folder available
app.use(express.static("./app/public"));

// require routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// set up listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});