// locations
var interface = document.getElementById("interface");
interface.style.display = "none"
var phrases = document.getElementById("phrases");
var entrance = document.getElementById("entrance");
entrance.style.display = "none";
var post_entrance = document.getElementById('post_entrance');
post_entrance.style.display = "none";
var escape_corridor = document.getElementById("escape_corridor");
escape_corridor.style.display = "none";
var lock_room = document.getElementById("lock_room");
lock_room.style.display = "none";
var door2 = document.getElementById('door2');
door2.style.display = 'none';
var keypad_container = document.getElementById('keypad_container');
keypad_container.style.display = "none";
var elevator = document.getElementById('elevator');
elevator.style.display = "none";
var first_corridor = document.getElementById("first_corridor");
first_corridor.style.display = "none";
var tv_room = document.getElementById('tv_room');
tv_room.style.display = "none";
var hallway_corridor = document.getElementById('hallway_corridor');
hallway_corridor.style.display = "none";
var upstairs = document.getElementById('upstairs');
upstairs.style.display = "none";
var vhs_room = document.getElementById('vhs_room');
vhs_room.style.display = "none";
var bathroom = document.getElementById('bathroom');
bathroom.style.display = "none";
var hallway_left = document.getElementById('hallway_left');
hallway_left.style.display = "none";
var hallway_right = document.getElementById('hallway_right');
hallway_right.style.display = "none";
var wall = document.getElementById('wall');
wall.style.display = "none";
var big_room = document.getElementById('big_room');
big_room.style.display = "none";
var operating_room = document.getElementById('operating_room');
operating_room.style.display = "none";
var morgue = document.getElementById('morgue');
morgue.style.display = "none";
var death = document.getElementById('death');
death.style.display = "none";
var children = document.getElementById('children');
children.style.display = "none";
var split = document.getElementById('split');
split.style.display = "none";
var dead = document.getElementById('dead');
dead.style.display = "none";


//Invetory

//Possible improvment - appendChild
var vhs = document.getElementById('item_vhs');
vhs.style.display = "none";
var knife = document.getElementById('item_knife');
knife.style.display = "none";
var cassette = document.getElementById('item_cassette');
cassette.style.display = "none";
var player = document.getElementById('item_player');
player.style.display = "none";
var player_ready = document.getElementById('item_player_ready');
player_ready.style.display = "none";
var rope = document.getElementById('item_rope');
rope.style.display = "none";
var poem = document.getElementById("item_poem");
poem.style.display = "none";

//poem mechanics
document.getElementById('item_poem').onmousedown = function(){
	seePoem();
}

//keypad mechanics
var buttons = document.querySelectorAll('.numbers');

for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', buttonClick);
}

function buttonClick(){
    var display = document.getElementById('display');
    
  
    if( display.value.length < 4 )
       display.value += this.innerHTML;
    else
       console.log('Sorry but you can just use 4 digits');
    
  if(display.value.length ==4){
    if(display.value ==9862){
      display.value = "Unlocked";
      setTimeout(unlocked, 2000);
      door2.style.display = "block";
      document.getElementById('door1').style.display = "none";
    } else {
      display.value = "ERROR";
         setTimeout(newDisplay, 1000);
       }
    }
} 

function newDisplay(){ 
   display.value = null;
}

document.getElementById('reset').onmousedown = function(){
	newDisplay();
}

document.getElementById('cry').onmousedown = function(){
	keypad_container.style.display = "none";
	lock_room.style.display = "block";
}



function unlocked(){
	keypad_container.style.display = "none";
    lock_room.style.display = "block";
}




//Cassette mechanics
var cassetteCheck = 0;
cassetteChecker = function(){
	if(cassetteCheck === 2){
		player_ready.style.display = "block";
		cassette.style.display = "none";
		player.style.display = "none";
	};
}
cassette.onmousedown = function(){
	alert("I need to find something to play it with");
}

player.onmousedown = function(){
	alert("I wonder if it's gonna come in handy");
}

player_ready.onmousedown = function(){
	hospital.pause();
	starring.play();
	document.getElementById('starring').onended = function(){
		hospital.play();
	}
}

//Rope/VHS/Knife mechanics
//KNIFE
var knife_used = false;
document.getElementById('item_knife').onmousedown = function(){
	knife_used = true;
	document.getElementById('item_knife').style.color = "red";
	document.getElementById('item_knife').style.border = "1px solid red";
}

var last_clicked_knife = null;
var count_knife= 0;


document.getElementById('rope').onmousedown = function(){
	if(knife_used){
		knife_used = false;
		alert("You've picked up a rope");
		document.getElementById('rope').style.display = "none";
		pickup.play();
		document.getElementById('bathroom').style.backgroundImage = "url('css/bathroom2.jpg')";
		document.getElementById('item_knife').style.color = "white";
		document.getElementById('item_knife').style.border = "1px solid white";
		count_knife = 0;
		rope.style.display = "block";
	}
}
//VHS
var vhs_used = false;
document.getElementById('item_vhs').onmousedown = function(){
	vhs_used = true;
	document.getElementById('item_vhs').style.color = "red";
	document.getElementById('item_vhs').style.border = "1px solid red";
}

var last_clicked_vhs = null;
var count_vhs= 0;


document.getElementById('tv').onmousedown = function(){
	if(vhs_used){
		vhs_used = false;
		document.getElementById('item_vhs').style.color = "white";
		document.getElementById('item_vhs').style.border = "1px solid white";
		count_vhs = 0;
		window.open("./tv.html", 'TV', 'height=540, width=800, left=600, top=300');
	}
}

//rope
var rope_used = false;
document.getElementById('item_rope').onmousedown = function(){
	rope_used = true;
	document.getElementById('item_rope').style.color = "red";
	document.getElementById('item_rope').style.border = "1px solid red";
}

var last_clicked_rope = null;
var count_rope= 0;

document.getElementById('cave').onmousedown = function(){
	if(rope_used){
		rope_used = false;
		alert("Level beaten. To be continued");
		document.getElementById('item_rope').style.color = "white";
		document.getElementById('item_rope').style.border = "1px solid white";
		count_rope = 0;
	}
}


window.onclick = function (e) {
	//knife
    last_clicked_knife = e.target;
    if(knife_used == true){
    	count_knife++;
    }
    if(knife_used == true && last_clicked_knife !== document.getElementById("rope") && count_knife >1){
			alert("Can't use it here");
			knife_used = false;
			// Note for the future - when item is used and then fails JS overwrites the :hover of buttons. Possible fix - change convention and instead of changing ids modify button class. Needs testing
			document.getElementById('item_knife').style.color = "white";
			document.getElementById('item_knife').style.border = "1px solid white";
			count_knife=0;
	}

	// VHS
    last_clicked_vhs = e.target;
    if(vhs_used == true){
    	count_vhs++;
    }
    if(vhs_used == true && last_clicked_vhs !== document.getElementById("tv") && count_vhs >1){
			alert("Can't use it here");
			vhs_used = false;
			document.getElementById('item_vhs').style.color = "white";
			document.getElementById('item_vhs').style.border = "1px solid white";
			count_vhs=0;
	}	

	//ROPE
	last_clicked_rope = e.target;
    if(rope_used == true){
    	count_rope++;
    }
    if(rope_used == true && last_clicked_rope !== document.getElementById("cave") && count_rope >1){
			alert("Can't use it here");
			rope_used = false;
			document.getElementById('item_rope').style.color = "white";
			document.getElementById('item_rope').style.border = "1px solid white";
			count_rope=0;
	}
}




//travel mechanics

// title screen

document.getElementById('title-button').onmousedown = function(){
	enter();
}

function enter(){
	phrases.style.display = "none";
	entrance.style.display = "block";
	interface.style.display = "block";
};

//entrance
document.getElementById('stairs_down').onmousedown = function(){
	entrance.style.display = "none";
	escape_corridor.style.display = "block";
}

//first corridor
document.getElementById('entrance_door').onmousedown = function(){
	first_corridor.style.display = "block";
	entrance.style.display = "none";
}

document.getElementById('first_corridor_d').onmousedown = function(){
	first_corridor.style.display = "none";
	entrance.style.display = "block";
}

// TV ROOM
document.getElementById('first_corridor_door').onmousedown = function(){
	first_corridor.style.display = "none";
	tv_room.style.display = "block";
}

document.getElementById('tv_d').onmousedown = function(){
	tv_room.style.display = "none";
	first_corridor.style.display = "block";
}

//hallway corridor
document.getElementById('first_corridor_hallway').onmousedown = function(){
	hallway_corridor.style.display = "block";
	first_corridor.style.display = "none";
}

document.getElementById('hallway_corridor_d').onmousedown = function(){
	hallway_corridor.style.display = "none";
	first_corridor.style.display = "block";
}

document.getElementById('hallway_corridor_door').onmousedown = function(){
	budge.play();
	alert("It won't budge");
}

//halway left
document.getElementById('hallway_corridor_l').onmousedown = function(){
	hallway_corridor.style.display = "none";
	hallway_left.style.display = "block";
}

document.getElementById('hallway_left_d').onmousedown = function(){
	hallway_left.style.display = "none";
	hallway_corridor.style.display = "block";
}

function reveal(){
	document.getElementById('six').style.display = "block";
};
document.getElementById('left_left').onmousedown = function(){
	hallway_left.style.display = "none";
	wall.style.display = "block";
	document.getElementById('six').style.display = "none";
	setTimeout("reveal()", 10000)
}

// Split
document.getElementById('left_front').onmousedown = function(){
	hallway_left.style.display = "none";
	split.style.display = "block";
}

document.getElementById("split_d").onmousedown = function(){
	split.style.display = "none";
	hallway_left.style.display = "block";
}

document.getElementById('knife').onmousedown = function(){
	knife.style.display = "block";
	document.getElementById('knife').style.display = "none";
	pickup.play();
	alert("You've found a knife");
}

document.getElementById('cassette').onmousedown = function(){
	pickup.play();
	cassette.style.display = "block";
	document.getElementById('cassette').style.display = "none";
	alert("You've picked up Cassette Tape");
	cassetteCheck ++;
	cassetteChecker();
}

//Wall
document.getElementById('wall_d').onmousedown = function(){
	wall.style.display = "none";
	hallway_left.style.display = "block";
}



//Big Room

document.getElementById('wall_r').onmousedown = function(){
	wall.style.display = "none";
	big_room.style.display = "block";
}

document.getElementById('big_room_d').onmousedown = function(){
	big_room.style.display = "none";
	wall.style.display = "block";
}

document.getElementById('cable').onmousedown = function(){
	if(knife_used == true){
		alert("It's too high to cut it down and I didn't see anything big enough to climb on");
		knife_used = false;
		document.getElementById('item_knife').style.color = "white";
		document.getElementById('item_knife').style.border = "1px solid white";
		count_knife = 0;
	}
}

document.getElementById('face').onmousedown = function(){
	stopit.play();
}

// Morgue

document.getElementById('big_left_door').onmousedown = function(){
	big_room.style.display = "none";
	morgue.style.display = "block";
}

document.getElementById('morgue_d').onmousedown = function(){
	morgue.style.display = "none";
	big_room.style.display = "block";
}

document.getElementById('empty').onmousedown = function(){
	setTimeout(function() { alert('This one is empty'); }, 1);
}

document.getElementById('scream').onmousedown = function(){
	screamSound.play();
}

document.getElementById('with_body').onmousedown = function(){
	morgue.style.display = "none";
	dead.style.display = "block";
}

document.getElementById('dead_d').onmousedown = function(){
	dead.style.display = "none";
	morgue.style.display = "block";
}

// operarating room

document.getElementById('big_right_door').onmousedown = function(){
	big_room.style.display = "none";
	operating_room.style.display = "block";
}

document.getElementById('operating_room_d').onmousedown = function(){
	operating_room.style.display = "none";
	big_room.style.display = "block";
}

document.getElementById('operation').onmousedown = function(){
	hospital.pause();
	samanthadeath.play();
	document.getElementById('samanthadeath').onended = function(){
		hospital.play();
	}
}

//hallway right
document.getElementById('hallway_corridor_r').onmousedown = function(){
	hallway_corridor.style.display = "none";
	hallway_right.style.display = "block";
}

document.getElementById('hallway_right_d').onmousedown = function(){
	hallway_corridor.style.display = "block";
	hallway_right.style.display = "none";
}

//death
document.getElementById('double_door').onmousedown = function(){
	hallway_right.style.display = "none";
	death.style.display = "block";
}

document.getElementById('death_d').onmousedown = function(){
	death.style.display = "none";
	hallway_right.style.display = "block";
}

//Children
document.getElementById('right_door').onmousedown = function(){
	hallway_right.style.display = "none";
	children.style.display = "block";
}

document.getElementById('children_d').onmousedown = function(){
	children.style.display = "none";
	hallway_right.style.display = "block";
}

document.getElementById('player').onmousedown = function(){
	item_player.style.display = "block";
	document.getElementById('player').style.display = "none";
	pickup.play();
	children.style.backgroundImage = "url('css/children.jpg')";
	cassetteCheck ++;
	cassetteChecker();
}

function seePoem(){
		window.open("./poem.html", 'Poems', 'height=906, width=700,left=700');
};

document.getElementById('poems').onmousedown = function(){
	seePoem();
	poem.style.display = "block";
	pickup.play();
};




//upstairs
document.getElementById('hallway_corridor_stairs').onmousedown = function(){
	hallway_corridor.style.display = "none";
	upstairs.style.display = "block";
}

document.getElementById('upstairs_d').onmousedown = function(){
	upstairs.style.display = "none";
	hallway_corridor.style.display = "block";
}

// VHS Room
document.getElementById('to_vhs').onmousedown = function(){
	upstairs.style.display = "none";
	vhs_room.style.display = "block";
}

document.getElementById('vhs_d').onmousedown = function(){
	vhs_room.style.display = "none";
	upstairs.style.display = "block";
}

document.getElementById('vhs').onmousedown = function(){
	vhs.style.display = "block";
	vhs_room.style.backgroundImage = "url('css/vhsroom3.jpg')";
	pickup.play(); 
    document.getElementById('vhs').style.display = "none";
}

// Bathroom
document.getElementById('to_bathroom').onmousedown = function(){
	upstairs.style.display = "none";
	bathroom.style.display = "block";
}

document.getElementById('bathroom_d').onmousedown = function(){
	bathroom.style.display = "none";
	upstairs.style.display = "block";
}

//post entrance
document.getElementById('post_d').onmousedown = function(){
	post_entrance.style.display = "none";
	escape_corridor.style.display = "block";
}

document.getElementById('post_door').onmousedown = function(){
	first_corridor.style.display = "block";
	post_entrance.style.display = "none";
}

//escape_corridor
document.getElementById('escape_corridor_d').onmousedown = function(){
	escape_corridor.style.display = "none";
	post_entrance.style.display = "block";
}

document.getElementById('escape_door').onmousedown = function(){
	escape_corridor.style.display = "none";
	lock_room.style.display = "block";
}

// lock room
document.getElementById('lock_room_d').onmousedown = function(){
	lock_room.style.display = "none";
	escape_corridor.style.display = "block";
}

document.getElementById('keypad_div').onmousedown = function(){
	lock_room.style.display = "none";
	keypad_container.style.display = "block";
}

document.getElementById('keypad_d').onmousedown = function(){
	keypad_container.style.display = "none";
	lock_room.style.display = "block";
}

document.getElementById('door1').onmousedown = function(){
	alert("The door is locked. I'm gonna need a password to open it");
}

door2.onmousedown = function(){
	lock_room.style.display = "none";
	elevator.style.display = "block";
};

// Elevator
document.getElementById('elevator_d').onmousedown = function(){
	elevator.style.display = "none";
	lock_room.style.display = "block";
}