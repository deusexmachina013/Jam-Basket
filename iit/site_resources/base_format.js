// This script loads in the header, the menu bar, and the footer of the site.

$(document).ready(function() {
  // Write the header.
  var headerHTML = "";
  
  headerHTML += "<section id='header'>";
  headerHTML += "<hl>Jam Basket</h1>";
  headerHTML += "</section>";
  
  // Load in the header.
  $("#content").before(headerHTML);
  
  // Write the menu bar.
  var menuBarHTML = "";
  
  menuBarHTML += "<section id='menu'>"
  menuBarHTML += "<ul class='bar'>"
  menuBarHTML += "<span class= 'menuItems'>"
  menuBarHTML += "<li><a href = 'index.html'>Home</a></li>"
  menuBarHTML += "<li>Browse</li>"
  menuBarHTML += "<li>Community</li>"
  menuBarHTML += "</span>"
  menuBarHTML += "<li>"
  menuBarHTML += "<form>"
  menuBarHTML += "<label for='search'>"
  menuBarHTML += "<input type='text' placeholder='Search'>"
  menuBarHTML += "</label>"
  menuBarHTML += "</form>"
  menuBarHTML += "</li>"
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