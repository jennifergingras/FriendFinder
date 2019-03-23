$(document).ready(function () {
  console.log("ready!");


  // on quiz submission
  $(".submit-btn").on("click", function (event) {
    // get user input
    var newFriend = {
      Name: $("#name").val().trim(),
      Photo: $("#photo").val().trim(),
      Answers: [$("#q1").val(),
        $("#q2").val(),
        $("#q3").val(),
        $("#q4").val(),
        $("#q5").val(),
        $("#q6").val(),
        $("#q7").val(),
        $("#q8").val(),
        $("#q9").val(),
        $("#q10").val()
      ]
    };
    console.log(newFriend);
    console.log("hello");

    $.post("/api/friends", newFriend,
      function (data) {

        $("#friend-name").text(data.name);
        $("#friend-photo").attr("src", data.photo);

        $('#friendModal').modal("toggle");

        // Clear the form when submitting
        $("#name").val("");
        $("#photo").val("");

      });

  });



});