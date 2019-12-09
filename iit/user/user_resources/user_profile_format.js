$(document).ready(function () {

  // Attempt to populate the labs page with information found in the JSON file.
  $.ajax({
    // Put out a GET request for the requisite JSON file.
    type: "GET",
    url: "user_resources/mock_users.json",
    dataType: "json",

    // If the get request is successful, scrape the JSON data and format it for my webpage.
    success: function (responseData, status) {
      var output = "";
      
      // Format the JSON data for each entry into HTML.
      $.each(responseData.user, function(mainIndex, item) {
        // For now, only present TreeLizard's profile page.
        if(item.username == "TreeLizard") {
          // Format and output the Header Information.
          output += "<div class='blanket'>";
          output += "<div id='clickables'>";
            
          // Add the clickable Jam Basket Logo to the profile.
          output += "<a href='../index.html' style='display: block;'><object data='../site_resources/Jam Basket Logo.svg' type='image/svg+xml'  style='pointer-events: none;' height='100' width='100'></object></a>";
            
          // Add the user's social media, if any.
          output += "<ul>";
          $.each(item.externalLinks, function(socialIndex, socialItem) {
            output += "<li><a href='" + socialItem.link + "' style='display: block;'>";
            
            output += "<object data="
            // Select the logo based on the website.
            if(socialItem.website == "Twitch") {
              output += '"user_resources/external_assets/TwitchGlitchPurple.svg"';
            }
            output += " type='image/svg+xml' style='pointer-events: none;' width='25px' height='25px'></object>";
            
            output += "</a></li>";
          });
          output += "</ul></div>";
          
          // Add the profile header.
          output += "<div id='profile'>";
          output += "<img src='user_resources/external_assets/Base%20Identicon.png' alt='Empty User Avatar'/>";
          output += "<h2>" + item.username + "</h2>";
          output += "<h3>Current Jam: " + item.currentJam + "</h3>";
          output += "</div></div>"
          
          // Add the "logged in" user's profile icon.
          output += '<div id="logged"><img src="user_resources/external_assets/User%20Icon%201.png" alt="Your User Avatar" width="25px" height="25px"/></div>';
          
          // Add the completed header to the page.
          $("#header").html(output);
          
          // Clean up the variables for the next round of information gathering.
          output = "";
          
          // Format and output the Content Information.
          $.each(item.gameJams, function(gameIndex, gameItem) {
            output += "<div class='game'>";
            
            // Create the Entry Header.
            output += "<ul class='row'>";
            output += "<li><h2>" + '"' + gameItem.jamName + '": ' + gameItem.submissionName + "</h2></li>";
            output += "<li class='column'>";
            output += "<h2>Rank in Jam: #" + gameItem.ultimateRanking + "</h2></li>";
            output += "</ul>";
            
            // Create the Jam Info part of the body.
            output += "<ul class='row'>";
            output += "<li><h2>Theme: " + gameItem.jamTheme + "</h2></li>";
            output += "<li class='column'>";
            output += "<h2>Participated: " + gameItem.jamDate + "</h2>";
            output += "</li></ul>";
            
            // Create the Game Info part of the body.
            output += "<ul class='row'>";
            // Add the game description.
            output += "<li><p>" + gameItem.submissionDescription + "</p></li>"
            // Add Judge scores, if any.
            output += "<li><p>Judge's Scores:</p></li>"
            $.each(gameItem.rankingInformation, function(reviewIndex, reviewItem) {
                output += "<li><p>" + reviewItem.metric + "/" + reviewItem.performance + " - " + reviewItem.category + "</p></li>";
            });
            output += "</ul></div>";
          });
          
          // Add all the user's games to the page.
          $("#content").html(output);
        }
      });
    },

    // Always account for the possibility of error.
    error: function (msg) {
      alert("This page is unable to get the user's profile information.");
    }
  });
});