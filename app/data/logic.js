$(document).ready(function () {
  console.log("ready!");

  


  // on quiz submission
  $(".quiz-btn").on("click", function (event) {

    // Here we grab the form elements
    var newFriend = {
      Name: $("#name").val().trim(),
      Photo: $("#phone").val().trim(),
      Answers: 
    };

    console.log(newFriend);

    $.post("/api/friends", newFriend,
      function (data) {

        // Clear the form when submitting
        $("#name").val("");
        $("#phone").val("");

      });

  });

});