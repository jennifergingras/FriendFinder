// REQUIRE
var friendData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

  // Gets
  app.get("/api/friends", function (req, res) {
    res.json(friendData);
  });


  // Posts
  app.post("/api/friends", function (req, res) {
    friendData.push(req.body);
    res.json(true);
  });

};