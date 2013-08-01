// Create the canvas
var container = document.getElementById('game');
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 400;
//document.body.appendChild(canvas);
container.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "../img/background2.png";

// Farmer image
var farmerReady = false;
var farmerImage = new Image();
farmerImage.onload = function () {
	farmerReady = true;
};
farmerImage.src = "../img/farmer.png";

// Pig image
var pigReady = false;
var pigImage = new Image();
pigImage.onload = function () {
	pigReady = true;
};
pigImage.src = "../img/pig.png";

// Game objects
var farmer = {
	speed: 256 // movement in pixels per second
};
var pig = {};
var pigsCaught = 0;

//Soundeffects
var pigSqeek = new Audio("../sound/pig.ogg");
var yeehaw = new Audio("../sound/yeehaw.ogg");

//Toggles the background sound
function toggleSound(){
	var bgMusic = document.getElementById("bgMusic");
	
	if (bgMusic.paused) {
		bgMusic.play();
		toggle.innerHTML = "No background sound";
	}
	else {
		bgMusic.pause();
		toggle.innerHTML = "Play background sound";
	}
};


// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
		keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
		delete keysDown[e.keyCode];
}, false);

// Reset the game when the player has won
var reset = function () {
	farmer.x = canvas.width / 2;
	farmer.y = canvas.height / 2;

	// Throw the pig somewhere on the screen randomly
	pig.x = 32 + (Math.random() * (canvas.width - 64));
	pig.y = 32 + (Math.random() * (canvas.height - 64));
	pigSqeek.play();
	
	pigsCaught = 0;
	yeehaw.play();
};

// Throw out another pig if a pig has been caught
var resetPig = function () {
	pig.x = 32 + (Math.random() * (canvas.width - 64));
	pig.y = 32 + (Math.random() * (canvas.height - 64));
	pigSqeek.play();
};

// Update game objects
var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
farmer.y -= farmer.speed * modifier;
}
if (40 in keysDown) { // Player holding down
	farmer.y += farmer.speed * modifier;
}
if (37 in keysDown) { // Player holding left
	farmer.x -= farmer.speed * modifier;
}
if (39 in keysDown) { // Player holding right
	farmer.x += farmer.speed * modifier;
}

// Is the farmer and a pig touching?
if (
	farmer.x <= (pig.x + 32)
	&& pig.x <= (farmer.x + 32)
	&& farmer.y <= (pig.y + 32)
	&& pig.y <= (farmer.y + 32)
) {
	++pigsCaught;
	resetPig();
}

var gameOver = function() {
	$('div#gameOver').show();
};

$('div#gameOver').click(function(){
		$('div#gameOver').hide();
		reset();
});

//Prevents movement outside of the canvas
if (farmer.y < -5) {farmer.y = -5;}
if (farmer.y > canvas.height-35) {farmer.y = canvas.height-35;}
if (farmer.x < -5) {farmer.x = -5;}
if (farmer.x > canvas.width-30) {farmer.x = canvas.width-30;}

if (pigsCaught == 10) {
	gameOver();
}
	
}; //end of update code

// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (farmerReady) {
		ctx.drawImage(farmerImage, farmer.x, farmer.y);
	}

	if (pigReady) {
		ctx.drawImage(pigImage, pig.x, pig.y);
	}
	
	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Pigs caught: " + pigsCaught, 32, 32);
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;
};

// Let's play this game!
reset();
var then = Date.now();
setInterval(main, 1); // Execute as fast as possible
