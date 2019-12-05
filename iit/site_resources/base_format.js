// This script loads in the header, the menu bar, and the footer of the site.

$(document).ready(function() {
  // Write the header.
  var headerHTML = "";
  headerHTML += "<h1>Jam</h1>"
  headerHTML += "<a href='index.html' style='display: block'>"
  headerHTML += "<object data='site_resources/Jam Basket Logo.svg' type='image/svg+xml' style='pointer-events: none;' height = '100' width = '100'></object>";
  headerHTML += "</a>"
  headerHTML += "<h1>Basket</h1>"
  // Load in the header.
  $(".TopPage").html(headerHTML);
  
  // Write the menu bar.
  var menuBarHTML = "";
  
  menuBarHTML += "<section id='menu'>"
  menuBarHTML += "<ul class='bar'>"
  menuBarHTML += "<li><a href = 'index.html'>Home</a></li>"
  menuBarHTML += "<li><a href = 'jams/jam_lineup.html'>Browse</a></li>"
  menuBarHTML += "<li><a href = 'user/profile.html'>Profile</a></li>"
  menuBarHTML += "<li>"
  menuBarHTML += "<form>"
  menuBarHTML += "<label for='search'>"
  menuBarHTML += "<input type='text' placeholder='Search'>"
  menuBarHTML += "</label>"
  menuBarHTML += "</form>"
  menuBarHTML += "</li>"
  menuBarHTML += "<li><a href = '/Jam-Basket/iit/user/login.html'>Login</a></li>"
  menuBarHTML += "</ul>"
  menuBarHTML += "</section>"
  
  // Load in the menu bar.
  $("#content").before(menuBarHTML);
  
  // Write the footer.
  var footerHTML = "";
  
  footerHTML += "<section id='footer'>";
  footerHTML += "<footer>";
  footerHTML += "<p>This is a student project by Jacob Dyer, Anthony Bonadies, and Tyler Green.</p>";
  footerHTML += "</footer>";
  footerHTML += "</section>";
  
  $("#content").after(footerHTML);


});