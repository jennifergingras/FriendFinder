$(document).ready(function () {
  console.log("ready!");


  // on quiz submission
  $(".submit-btn").on("click", function (event) {

    // Form validation
    function validateForm() {
      var isValid = true;
      $(".form-control").each(function () {
        if ($(this).val() === "") {
          isValid = false;
        }
      });
      $(".custom-select").each(function () {

        if ($(this).val() === "") {
          isValid = false;
        }
      });
      return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {
      // get user input
      var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        answers: [$("#q1").val(),
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
          console.log(data);
          $("#friend-name").text(data.name);
          $("#friend-photo").attr("src", data.photo);

          $('#friendModal').modal("toggle");
        });
    } else {
      $('#errorModal').modal("toggle");
    }

  });

});




// // Clear the form when submitting
// $("#name").val("I am called");
// $("#photo").val("Link");
// [$("#q1").val("Answer"),
//   $("#q2").val("Answer"),
//   $("#q3").val("Answer"),
//   $("#q4").val("Answer"),
//   $("#q5").val("Answer"),
//   $("#q6").val("Answer"),
//   $("#q7").val("Answer"),
//   $("#q8").val("Answer"),
//   $("#q9").val("Answer"),
//   $("#q10").val("Answer")
// ]