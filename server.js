// REQUIRE
var express = require("express");

// tells Node that we're creating an express server
var app = express();

// set port
var PORT = process.env.PORT || 3000;

// sets express app to handle data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// require routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// set up listener
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});