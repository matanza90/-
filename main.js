

function getYourName() {
  let porsen = prompt("תגיד לי מהו שמך ");
  if (porsen != null) {
    document.getElementById("pit").innerHTML = porsen ;
    document.getElementById("pit").style.color = "#ff0000";

  }
}
/////דביק//////

window.onscroll = function () { myFunction() };
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/*function myFunction() {
    document.getElementById("pit").style.color = "#ff0000";
    document.getElementById("myP").style.color = "magenta";
    document.getElementById("myP2").style.color = "blue";
    document.getElementById("myDiv").style.color = "lightblue";
  }*/

/*myFunction(element, color)
function myFunction(element, color) {
element.style.color = color;}*/

///////////////////////

/*1 The onclick Event
document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
 document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}*/

///////

/*2 The onclick Event

document.getElementById("demo").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!"; */

  ///////


