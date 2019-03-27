// REQUIRE
var friendsArr = require("../data/friends");

// ROUTES
module.exports = function (app) {

  // Gets
  app.get("/api/friends", function (req, res) {
    res.json(friendsArr);
  });

  // Posts (I copied this from the solved homework - I'm still a bit hazy on it)
  app.post("/api/friends", function (req, res) {

    var bestFriend = {
      name: "",
      photo: "",
      friendDifference: 999
    };

    console.log("START");
    var userData = req.body;
    var userAnswers = userData.answers;
    console.log(userData);
    console.log(userAnswers)
    console.log("blah!")


    // friendsArr.forEach(function (elem) {

    // })
    // run user input through each of the other answer arrays for each friend object 
    for (var i = 0; i < friendsArr.length; i++) {
      var currentFriend = friendsArr[i];
      var totalDifference = 0;
      console.log("current friend" + currentFriend.name);
      // by comparing each index in the answer array to get the difference of each answer
      for (var j = 0; j < 10; j++) {
        var currentFriendScore = currentFriend.answers[j];
        var currentUserScore = userAnswers[j];
        // save the total difference
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
        console.log("total diff" + totalDifference);
      }
      // take the lowest difference - that is the best match
      if (totalDifference <= bestFriend.friendDifference) {
        // take the info of the best match
        bestFriend.name = currentFriend.name;
        console.log("best friend" + bestFriend.name);
        bestFriend.photo = currentFriend.photo;
        bestFriend.friendDifference = totalDifference;
      }
    }
    // save user data to database
    friendsArr.push(userData);
    // return the best friend match
    res.json(bestFriend);
    console.log(bestFriend);
  });

};