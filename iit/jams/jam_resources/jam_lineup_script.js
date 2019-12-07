$(document).ready(function () {

  // Load the Jams //

  // Attempt to populate the jam lineup page with information found in the JSON file.
  $.ajax({
    // Put out a GET request for the requisite JSON file.
    type: "GET",
    url: "jam_resources/mock_jams.json",
    dataType: "json",

    // If the get request is successful, scrape the JSON data and format it for the webpage.
    success: function (responseData, status) {
      var output = "";

      // Format the JSON data for each entry into HTML.
      $.each(responseData.jams, function (mainIndex, item) {
        output += "<li>";

        // Provide the jam name and theme.
        output += '<button class="accordion">' + item.jamName + ' - Theme: "' + item.jamTheme + '"' + "</button>";

        // Provide the other jam information.
        output += '<div class="panel">';
        output += '<div class="panel-text">';
        output += "<p class='start'>" + item.jamDesc + "</p>";
        output += "<p> Starts: " + item.jamStart + "</p>";
        output += "<p> Ends: " + item.jamEnd + "</p>";
        output += "<p><a href='" + item.jamLink + "'>Learn More!</a><p>";
        output += '</div></div></li>';
      });

      // Display the HTML on the website in the proper container.
      $("#jamEntries").html(output);
    },

    // Always account for the possibility of error.
    error: function (msg) {
      alert("This page is unable to read the jams file.");
    }
  });

  // Site Interactions //

  // Allow the user to toggle the accordions.
  $("body").on("click", ".accordion", function () {
    $(this).toggleClass("active");

    // Close any other open accordions.
    $("button").not(this).removeClass("active");
    $(".panel").not(this.nextElementSibling).css("display", "none");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

  // Allow the user to filter jams by name or theme.
  $("#filterBar").on("keyup", function () {
    var filter = this.value.toUpperCase();
    var list = $("li");

    for (index = 0; index < list.length; index++) {
      var button = list[index].getElementsByTagName("button")[0];
      var content = button.textContent || button.innerText;

      if (content.toUpperCase().indexOf(filter) > -1) {
        list[index].style.display = "";
      } else {
        list[index].style.display = "none";
      }
    }
  });
});