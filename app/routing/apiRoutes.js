// REQUIRE
var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  // Gets
  app.get("/api/friends", function (req, res) {
    res.json(tableData);
  });


  // Posts
  app.post("/api/friends", function (req, res) {
    tableData.push(req.body);
    res.json(true);
  });

};