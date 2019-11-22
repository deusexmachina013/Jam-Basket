$(document).ready(function() {
  // Allow the user games to reveal themselves once properly constructed.
  $("#content").hide();
  
  // Attempt to populate the labs page with information found in the JSON file.
  $.ajax({
    // Put out a GET request for the requisite JSON file.
    type: "GET",
    url: "mock_users.json",
    dataType: "json",
    
    // If the get request is successful, scrape the JSON data and format it for my webpage.
    success: function(responseData, status) {
      var output = "";
      
      /*
      // Format the JSON data for each entry into HTML.
      $.each(responseData.labs, function(mainIndex, item) {
        // Provide the lab name and description.  Such is the bare minimum.
        output += "<h3>" + item.labName + "</h3>";
        output += "<p>" + item.labDesc + "</p>";
        
        // If there are any associated links, build an anchor tag for each link and add it to the output.
        if(item.hasOwnProperty("labURL")) {
          var urlArray = item.labURL;
          
          $.each(urlArray, function(urlIndex, urlItem) {
            output += "<p><a href=";
            output += urlItem.URL;
            output += ">";
            output += urlItem.prompt;
            output += "</a></p>";
        });
      }
      */
      
      });
      
      // Display the HTML on the website in the proper container.
      $("#content").html(output);
      
      // Reveal the games all at once.
      $("#content").show(1000);
    },
        
    // Always account for the possibility of error.
    error: function(msg) {
      alert("This page is unable to get the user's games.");
    }
  });
});