// This script loads in the header, the menu bar, and the footer of the site.

$(document).ready(function() {
    // Write the header.
    var headerHTML = "";
    
    headerHTML += "<section id='header'>";
    headerHTML += "</section>";
    
    // Load in the header.
    $("section #content").before(headerHTML);
    
    // Write the menu bar.
    var menuBarHTML = "";
    
    menuBarHTML += "<section id='menu'>"
    menuBarHTML += "<ul class='bar'>"
    menuBarHTML += "<li>Home</li>"
    menuBarHTML += "<li>Browse</li>"
    menuBarHTML += "<li>Community</li>"
    menuBarHTML += "<li>"
    menuBarHTML += "<form>"
    menuBarHTML += "<label for='search'>"
    menuBarHTML += "<input type='text' size='20' placeholder='Search'>"
    menuBarHTML += "</label>"
    menuBarHTML += "</form>"
    menuBarHTML += "</li>"
    menuBarHTML += "</ul>"
    menuBarHTML += "</section>"
    
    // Load in the menu bar.
    $("section #content").before(menuBarHTML);
});