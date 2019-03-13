$(document).ready(function () {
  console.log("ready!");

  // Array


  // on quiz submission
  $(".quiz-btn").on("click", function (event) {

    // Here we grab the form elements
    var newFriend = {
      Name: $("#reserve-name").val().trim(),
      Photo: $("#reserve-phone").val().trim(),

    };

    console.log(newReservation);

    $.post("/api/friends", newReservation,
      function (data) {

        // Clear the form when submitting
        $("#reserve-name").val("");
        $("#reserve-phone").val("");
        $("#reserve-email").val("");
        $("#reserve-unique-id").val("");

      });

  });

});