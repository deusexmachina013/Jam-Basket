$(document).ready(function () {
  // Set the date we're counting down to
  var countDownDate = new Date("Dec 25, 2019 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="time"
    document.getElementById("time").innerHTML = "Time Remaining:</br>" + days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("time").innerHTML = "EXPIRED";
    }
  }, 1000);

  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var btn = document.getElementById("signup");

  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

});