document.getElementById("beginning").style.display = "none";
document.getElementById("wasteland").style.display = "none";
document.getElementById("interface1").style.display = "none";
document.getElementById("interface2").style.display = "none";
document.getElementById("vid1_a").style.display = "none";
document.getElementById("talk1_a").style.display = "none";
document.getElementById("travel1").style.display = "none";


function hide(){
  document.getElementById("phrases").style.display = "none";
  document.getElementById("beginning").style.display = "block";
  document.getElementById("interface1").style.display = "block";

}

function door(){
  document.getElementById("beginning").style.display = "none";
  document.getElementById("wasteland").style.display = "block";
  document.getElementById("interface2").style.display = "block";
  document.getElementById("interface1").style.display = "none";
}

function vid1(){
  document.getElementById("vid1_a").style.display = "block";
}

var gunshot = document.getElementById("gunshot");

function talk1_a(){
  document.getElementById("talk1_a").style.display = "block";
}

var talk = document.getElementById("dead").value;

function dead() {
  alert(talk);
}

document.getElementById('dead').onsubmit = function(e) {
    // your code goes here...
    var talk = document.getElementById("talk").value;
    if (talk == "dead"){
      document.getElementById("travel1").style.display = "block";
    } else {
      alert("What?")
    }
  

    e.preventDefault(); // this will prevent the default operation of your form within this event
    return false;
}

// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 

btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    };
}

