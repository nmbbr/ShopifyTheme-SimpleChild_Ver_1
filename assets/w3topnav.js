
function myFunction() {
  var x = document.getElementById("W3topnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
