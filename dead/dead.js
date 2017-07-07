//screens
document.getElementById("interface").style.display = "none";
document.getElementById("entrance").style.display = "none";
document.getElementById("locked").style.display = "none";
document.getElementById("vid_locked").style.display = "none";
document.getElementById("corridor").style.display = "none";
document.getElementById("torture").style.display = "none";
document.getElementById("beds").style.display = "none";
document.getElementById("item_boltcutters").style.display = "none";

// chain mechanics

var last_clicked = null;
var count=0;
window.onclick = function (e) {
    last_clicked = e.target;

    if(boltcutters_used == true){
    	count++;
    }
    if(boltcutters_used == true && last_clicked !== document.getElementById("chain") && count >1){
		alert("Can't use it here");
		boltcutters_used = false;
		document.getElementById('item_boltcutters').style.color = "white";
		document.getElementById('item_boltcutters').style.border = "1px solid white";
		count=0;
	}
}

var boltcutters_used = false;
document.getElementById('item_boltcutters').onmousedown = function(){
	boltcutters_used = true;
	document.getElementById('item_boltcutters').style.color = "red";
	document.getElementById('item_boltcutters').style.border = "1px solid red";
}

function newPage(){
	location.href = "../freedom/freedom.html";
}

var boltcutters_found = false;
document.getElementById("chain").onmousedown = function(){
	if(boltcutters_used){
		chainBroken.play();
		setTimeout(function() {
    		newPage(); 
			}, 2500);
	} else if(!boltcutters_found){
		alert("I need to find something to break this chain...")
	} else {
		alert("Boltcutters could do the trick")
	}
}

//broken doors
function lock_jammed(){
	alert("Lock's jammed")
}

// door budge
document.getElementById("wooden_door").onmousedown = function(){
	budge.play();
	alert("It won't budge");
}

//torture room mechanics
var flashback = false;
document.getElementById("flashback").onmousedown = function(){
	tortureSound.play();
	flashback = true;
	if(flashback){
		document.getElementById("torture").style.backgroundImage = "url('css/torture1.jpg')";
	}
}

// boltcutters mechanics
document.getElementById('boltcutters').onmousedown = function(){
	pickup.play();
	boltcutters_found = true;
	document.getElementById('boltcutters').style.display = "none";
	document.getElementById("beds").style.backgroundImage = "url('css/3.jpg')";
	document.getElementById("item_boltcutters").style.display = "block";
}

// gate mechanics
var check = 0;
document.getElementById('chained_door').onmousedown = function(){
	check++;
}
function door_locked(){

	if(check >2){
		alert("Perhaps we could find something to break this chain...");
	} else {
		alert("Door's locked")
	}
}




//travel mechanics
function enter(){
  document.getElementById("phrases").style.display = "none";
  document.getElementById("entrance").style.display = "block";
  document.getElementById("interface").style.display = "block";
}

function locked(){
	document.getElementById("locked").style.display = "block";
	document.getElementById("entrance").style.display = "none";
	document.getElementById("vid_entrance").style.display = "none";
	document.getElementById("vid_locked").style.display = "block";
}

function locked_down(){
	// document.getElementById("vid_entrance").style.display = "block";   NIE WIEM CZY POTRZEBNE
	document.getElementById("vid_locked").style.display = "none";
	document.getElementById("entrance").style.display = "block";
	document.getElementById("locked").style.display = "none";
	boltcutters_used = false;
}

function corridor(){
	document.getElementById("corridor").style.display = "block";
	document.getElementById("entrance").style.display = "none";
}

function corridor_down(){
	document.getElementById("corridor").style.display = "none";
	document.getElementById("entrance").style.display = "block";
}


function torture_room(){
	document.getElementById("torture").style.display = "block";
	document.getElementById("corridor").style.display = "none";
}

function torture_down(){
	document.getElementById("corridor").style.display = "block";
	document.getElementById("torture").style.display = "none";
}

function beds(){
	document.getElementById("beds").style.display = "block";
	document.getElementById("corridor").style.display = "none";
}

function beds_down(){
	document.getElementById("corridor").style.display = "block";
	document.getElementById("beds").style.display = "none";
}

document.getElementById('hallway').onmousedown = function(){
	alert("I'm not going there, I can feel a wicked presence inside");
}