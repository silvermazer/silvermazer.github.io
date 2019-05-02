let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = window.innerWidth;
cnv.height = window.innerHeight;

var frequency = 100;
var frequencyold;
var gameover = false;
var lives = 3;
var speed = 600;
var level = 0;
var slow = 1;
var left;
var food = ["e"];
var mdir = 5;
var mx = 781;
var my = 1;
var px = 21;
var py = 561;
dir = 0;
var dead = false;
var finish = false;
var warp = true;
var warping = false;
var startintro = true;
var levelintro = true;
var intro = 0;
var start = false;
var interval = setInterval(loop, speed);

window.onresize = function (event) {
	setTimeout(function resize () {
		cnv.width = window.innerWidth;
		cnv.height = window.innerHeight;
		ctx.scale(window.innerWidth / 46 / 20, window.innerHeight / 30 / 20)
	}, 100)
}



document.addEventListener("keydown", function (event) {
	if (start == false) {
		start = true;
		levelstart();
		if (Tone.context.state !== 'running') {
			Tone.context.resume();
		}
	}

});

document.addEventListener("touchstart", function (event) {
	if (start == false) {
		start = true;
		levelstart();
		if (Tone.context.state !== 'running') {
			Tone.context.resume();
		}
	}

});



document.addEventListener("keydown", keydownhandler);

ctx.scale(window.innerWidth / 46 / 20, window.innerHeight / 30 / 20)


function keydownhandler() {
	// set movement dir

	if (event.code == "ArrowRight" || event.code == "KeyD" ) {
		dir = 3;
	}
	if (event.code == "ArrowLeft" || event.code == "KeyA" ) {
		dir = 1;
	}
	if (event.code == "ArrowUp" || event.code == "KeyW" ) {
		dir = 2;
	}
	if (event.code == "ArrowDown" || event.code == "KeyS" ) {
		dir = 4;

	}

}


function loop() {


	if (start == false) {
		write(["e", "a", "t"], "white", 321, 121);
		write(["p", "r", "e", "s", "s"], "yellow", 241, 241);
		write(["t", "o", " ", "p", "l", "a", "y"], "red", 161, 361);
	}

	else {


		if (intro < 10 * (500 / speed)) {

			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, cnv.width, cnv.height)
			if (startintro == true && intro < 3 * (500 / speed)) {
				write(["e", "a", "t"], "white", 321, 221);
			}
			else if (startintro == true && intro < 7 * (500 / speed)) {
				write(["l", "e", "v", "e", "l", " ", "1"], "white", 121, 221);
			}
			else if (startintro == true && intro < 10 * (500 / speed)) {
				write(["3", " ", "g", "u", "y", "s", " ", "l", "e", "f", "t"], "lime", 21, 221);
			}

			if (levelintro == true && intro < 5 * (500 / speed) && startintro == false) {
				write(["l", "e", "v", "e", "l", " ", level], "white", 121, 221);
			}

			else if (intro < 10 * (500 / speed) && startintro == false) {
				if (lives == 3) {
					write(["3", " ", "g", "u", "y", "s", " ", "l", "e", "f", "t"], "lime", 21, 221);
				}
				if (lives == 2) {
					write(["2", " ", "g", "u", "y", "s", " ", "l", "e", "f", "t"], "yellow", 21, 221);
				}
				if (lives == 1) {
					write(["1", " ", "g", "u", "y", " ", "l", "e", "f", "t"], "red", 61, 221);
				}
			}

			intro = intro + 1;

			// draw wall
			var b = 0;
			var bx = 1;
			var by = 1;


			while (b != 149) {

				ctx.fillRect(bx, by, 18, 18);
				ctx.fillStyle = "gray";

				b = b + 1;

				if (b < 30) {
					by = by + 20;
				}

				else if (b > 29 && b < 75) {
					bx = bx + 20;

					if (b == 30 && level > 0) { ctx.fillStyle = "blue"; }
					if (b == 32 && level > 1) { ctx.fillStyle = "green"; }
					if (b == 34 && level > 2) { ctx.fillStyle = "yellow"; }
					if (b == 36 && level > 3) { ctx.fillStyle = "orange"; }
					if (b == 38 && level > 4) { ctx.fillStyle = "red"; }
					if (b == 40 && level > 5) { ctx.fillStyle = "violet"; }
					if (b == 42 && level > 6) { ctx.fillStyle = "pink"; }
					if (b == 44 && level > 7) { ctx.fillStyle = "orangered"; }
					if (b == 46 && level > 8) { ctx.fillStyle = "aqua"; }
					if (b == 48 && level > 9) { ctx.fillStyle = "DarkKhaki"; }
					if (b == 50 && level > 10) { ctx.fillStyle = "white"; }
					if (b == 52 && level > 11) { ctx.fillStyle = "lime"; }
					if (b == 54 && level > 12) { ctx.fillStyle = "magenta"; }
					if (b == 56 && level > 13) { ctx.fillStyle = "navy"; }
					if (b == 58 && level > 14) { ctx.fillStyle = "Sienna"; }
					if (b == 60 && level > 15) { ctx.fillStyle = "SpringGreen"; }
					if (b == 62 && level > 16) { ctx.fillStyle = "brown"; }
					if (b == 64 && level > 17) { ctx.fillStyle = "YellowGreen"; }
					if (b == 66 && level > 18) { ctx.fillStyle = "DarkCyan"; }
					if (b == 68 && level > 19) { ctx.fillStyle = "coral"; }
					if (b == 70 && level > 20) { ctx.fillStyle = "Cornsilk"; }
					if (b == 72 && level > 21) { ctx.fillStyle = "Crimson"; }
					if (b == 74 && level > 22) { ctx.fillStyle = "AliceBlue"; }
				}

				else if (b < 104) {
					by = by - 20;
				}

				else if (b < 149) {
					bx = bx - 20; 0

					if (b == 147 && lives == 3) { ctx.fillStyle = "lime"; }
					if (b == 145 && lives == 3) { ctx.fillStyle = "lime"; }
					if (b == 143 && lives == 3) { ctx.fillStyle = "lime"; }
					if (b == 147 && lives == 2) { ctx.fillStyle = "yellow"; }
					if (b == 145 && lives == 2) { ctx.fillStyle = "yellow"; }
					if (b == 147 && lives == 1) { ctx.fillStyle = "red"; }
				}
			}
		}

		else {


			startintro = false;
			levelintro = false;

			//draw back
			if (warping == true) { ctx.fillStyle = "orangered"; }
			else if (gameover == true) { ctx.fillStyle = "darkred"; }
			else if (finish == true) { ctx.fillStyle = "LawnGreen"; }
			else if (dead == false) { ctx.fillStyle = "black"; }
			else { ctx.fillStyle = "red"; }
			ctx.fillRect(0, 0, cnv.width, cnv.height)

			// player move
			if (dead == false) {
				if (dir == 3) { px += 20; }
				else if (dir == 1) { px -= 20; }
				else if (dir == 2) { py -= 20; }
				else if (dir == 4) { py += 20; }
			}



			// draw wall
			var b = 0;
			var bx = 1;
			var by = 1;


			while (b != 170) {

				ctx.fillRect(bx, by, 18, 18);
				ctx.fillStyle = "gray";

				b = b + 1;

				if (b < 30) {
					by = by + 20;
				}

				else if (b > 29 && b < 75) {
					bx = bx + 20;

					if (b == 30 && level > 0) { ctx.fillStyle = "blue"; }
					if (b == 32 && level > 1) { ctx.fillStyle = "green"; }
					if (b == 34 && level > 2) { ctx.fillStyle = "yellow"; }
					if (b == 36 && level > 3) { ctx.fillStyle = "orange"; }
					if (b == 38 && level > 4) { ctx.fillStyle = "red"; }
					if (b == 40 && level > 5) { ctx.fillStyle = "violet"; }
					if (b == 42 && level > 6) { ctx.fillStyle = "Indigo"; }
					if (b == 44 && level > 7) { ctx.fillStyle = "orangered"; }
					if (b == 46 && level > 8) { ctx.fillStyle = "aqua"; }
					if (b == 48 && level > 9) { ctx.fillStyle = "DarkKhaki"; }
					if (b == 50 && level > 10) { ctx.fillStyle = "white"; }
					if (b == 52 && level > 11) { ctx.fillStyle = "lime"; }
					if (b == 54 && level > 12) { ctx.fillStyle = "magenta"; }
					if (b == 56 && level > 13) { ctx.fillStyle = "navy"; }
					if (b == 58 && level > 14) { ctx.fillStyle = "Sienna"; }
					if (b == 60 && level > 15) { ctx.fillStyle = "SpringGreen"; }
					if (b == 62 && level > 16) { ctx.fillStyle = "brown"; }
					if (b == 64 && level > 17) { ctx.fillStyle = "YellowGreen"; }
					if (b == 66 && level > 18) { ctx.fillStyle = "DarkCyan"; }
					if (b == 68 && level > 19) { ctx.fillStyle = "coral"; }
					if (b == 70 && level > 20) { ctx.fillStyle = "Cornsilk"; }
					if (b == 72 && level > 21) { ctx.fillStyle = "Crimson"; }
					if (b == 74 && level > 22) { ctx.fillStyle = "AliceBlue"; }
				}

				else if (b < 104) {
					by = by - 20;
				}

				else if (b < 149) {
					bx = bx - 20; 0

					if (b == 147 && lives == 3) { ctx.fillStyle = "lime"; }
					if (b == 145 && lives == 3) { ctx.fillStyle = "lime"; }
					if (b == 143 && lives == 3) { ctx.fillStyle = "lime"; }
					if (b == 147 && lives == 2) { ctx.fillStyle = "yellow"; }
					if (b == 145 && lives == 2) { ctx.fillStyle = "yellow"; }
					if (b == 147 && lives == 1) { ctx.fillStyle = "red"; }
				}
				
				else if(b == 149){
				bx = 621;
				by = 21;
				}
				
				else if(b < 157){
				by = by + 20;

				
				}
				else if(b < 170){
				bx = bx + 20;

				}
				
			}
			


			// wall teleporting
				
				if(dir == 2 || dir == 4){
					if (py > 561 && px < 621) { py = 21; warp = false; }
					if (py > 561 && px > 601) { py = 181; warp = false; } 
				

					if (py < 21 && px < 621) { py = 561; warp = false; }
					if (py < 181 && px > 601) { py = 561; warp = false; }
				}
				
				if(dir == 3 || dir == 1){
			
					if (px < 21 && py > 161) { px = 881; warp = false; }
					if (px < 21 && py < 181) { px = 601; warp = false; }
				
					if (px > 881 && py > 161) { px = 21; warp = false; }
					if (px > 601 && py < 181) { px = 21; warp = false; }
				}

			
			// monster
			if (finish == false) {
				if (Math.floor(Math.random() * slow) !== 0) {

					if (px > mx && py < my){mdir = 2;}
					else if (px < mx && py < my){mdir = 8;}
					else if (px < mx && py > my){mdir = 6;}				
					else if (px > mx && py > my){mdir = 4;}
					else if (px > mx) { mdir = 3; }
					else if (px < mx) { mdir = 7; }
					else if (py > my) { mdir = 5; }
					else if (py < my) { mdir = 1; }
					
					
					if(mdir == 1){my-=20;}
					else if(mdir == 2){mx+=20; my-=20;}
					else if(mdir == 3){mx+=20;}
					else if(mdir == 4){mx+=20; my+=20;}
					else if(mdir == 5){my+=20;}
					else if(mdir == 6){my+=20; mx-=20;}
					else if(mdir == 7){mx-=20;}
					else if(mdir == 8){mx-=20; my-=20;}
				}
				
				if(mx > 601 && my < 16) { mx = 601; }
				if(my < 181 && mx > 621 ) { my = 181; }
			}

			

			{//sound
				if (frequencyold !== frequency) {
					frequencyold = frequency;
				}
				else if (frequencyold == frequency) {
					frequency = 100;
				}

				var synth = new Tone.Synth({
					oscillator: {
						modulationType: 'sine',
					},
					envelope: {
						attack: 0.001,
						decay: 0.1,
						sustain: 0.1,
						release: 0.1
					}
				}).toMaster()


				synth.triggerAttackRelease(frequency, 0.01)

			}


			drawline();
			
			// score drawing
			
			var hun = 0;
			var ten = 0;
			var one = 0;
			var score = left;
			
			while(score != 0){
				score--
			
				one++
				if(one > 9){
					one = 0;
					ten++
					if(ten > 9){
						ten = 0;
						hun++
					}
				}
			
			}
			
			write([hun.toString(), ten.toString(), one.toString()], "white", 641, 41);

			//draw player/monster
			if (dead == false) {
				ctx.fillStyle = "yellow";
				ctx.fillRect(px, py, 18, 18);
			}
			ctx.fillStyle = "red";
			ctx.fillRect(mx, my, 18, 18);



			if (lives == 0) {
				lives = 3;
				gameover = true;
				finish = true;
				setTimeout(gameend, 1500);
			}

			if (left < 1) {
				left = 1;
				finish = true;
				if (warp == true) {
					warping = true;
				}
				setTimeout(levelstart, 1000);
			}

			//death
			if (finish == false) {
				if (px == mx && py == my && lives != 0) {
					dead = true;
					setTimeout(newlife, 1000);
					px = 21;
					py = 561;
					mx = 881;
					my = 181;
					warp = false;
				}
			}

		}
	}
}


function levelstart() {
	if (warping == true) {
		slow = 6;
		level = 4;
		speed = 200;
	}

	px = 21;
	py = 561;
	mx = 881;
	my = 181;
	h1 = (Math.floor(Math.random() * 8) + 4) * 2;
	v1 = (Math.floor(Math.random() * 8) + 4) * 2;
	h2 = (Math.floor(Math.random() * 8) + 4) * 2;
	v2 = (Math.floor(Math.random() * 8) + 4) * 2;
	h3 = (Math.floor(Math.random() * 8) + 4) * 2;
	v3 = (Math.floor(Math.random() * 8) + 4) * 2;
	a1 = (Math.floor(Math.random() * 8) + 4) * 2;
	a2 = (Math.floor(Math.random() * 8) + 4) * 2;
	hy.push(Math.floor(Math.random() * 10 + 2), Math.floor(Math.random() * 10 + 2), Math.floor(Math.random() * 10 + 2))
	vx.push(Math.floor(Math.random() * 12 + 2), Math.floor(Math.random() * 12 + 2), Math.floor(Math.random() * 12 + 2))
	ax.push(Math.floor(Math.random() * 12 + 2), Math.floor(Math.random() * 10 + 2))

	while (ax[1] == vx[1] | ax[1] == vx[2] | ax[1] == vx[3]) {
		ax = ["e"]

		ax.push(Math.floor(Math.random() * 12 + 2), Math.floor(Math.random() * 10 + 2))
	}

	while (ax[2] == hy[1] | ax[2] == hy[2] | ax[2] == hy[3]) {
		ax = ["e"]

		ax.push(Math.floor(Math.random() * 12 + 2), Math.floor(Math.random() * 10 + 2))
	}



	level = level + 1;
	slow++
	if (slow > 7) { slow = 7; }
	food = ["e"]
	if (speed > 100) { speed = speed - 100; }
	else { speed = speed - 25; }
	if (speed < 25) { speed = 25; }
	dir = 0;
	finish = false;
	if (level == 1) { left = h1 * 2 + v1 * 2; }
	else if (level > 3) { left = h1 * 2 + v1 * 2 + h2 * 2 + v2 * 2 + h3 * 2 + v3 * 2; }
	else { left = h1 * 2 + v1 * 2 + h2 * 2 + v2 * 2; }
	clearInterval(interval);
	interval = setInterval(loop, speed);
	levelintro = true;
	warping = false;
	intro = 0;
}



//called after death
function newlife() {
	if (gameover == false) {
		px = 21;
		py = 561;
		mx = 881;
		my = 181;
		dir = 0;
		lives--;
		dead = false;
		intro = 5;
	}
}

//ends game and restarts
function gameend() {
	speed = 500;
	hy = ["e"];
	vx = ["e"];
	ax = ["e"];
	startintro = true;
	levelstart();
	level = 1;
	slow = 2;
	lives = 3;
	gameover = false;
	finish = false;
	if (level == 1) { left = h1 * 2 + v1 * 2; }
	else if (level > 3) { left = h1 * 2 + v1 * 2 + h2 * 2 + v2 * 2 + h3 * 2 + v3 * 2; }
	else { left = h1 * 2 + v1 * 2 + h2 * 2 + v2 * 2; }
	warp = true;
	
}




// didn't write this swipe detector

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
	return evt.touches ||             // browser API
		evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
	xDown = getTouches(evt)[0].clientX;
	yDown = getTouches(evt)[0].clientY;
};

function handleTouchMove(evt) {
	if (!xDown || !yDown) {
		return;
	}

	var xUp = evt.touches[0].clientX;
	var yUp = evt.touches[0].clientY;

	var xDiff = xDown - xUp;
	var yDiff = yDown - yUp;

	if (Math.abs(xDiff) > Math.abs(yDiff)) {//most significant
		if (xDiff > 0) {
			dir = 1;
		} else {
			dir = 3;
		}
	} else {
		if (yDiff > 0) {
			dir = 2;
		} else {
			dir = 4;
		}
	}
	// reset values 
	xDown = null;
	yDown = null;
};



// writes string on canvas
function write(string, color, x, y) {
	ctx.fillStyle = color;
	var w1 = [];
	var w2 = [];
	var w3 = [];
	var w4 = [];
	var w5 = [];
	var v = 0;
	while (v < 44) {//defines how to draw letters and numbers
		if (string[v] == "a") { w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 0, 1); }
		if (string[v] == "b") { w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1); }
		if (string[v] == "c") { w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 0); w3.push(0, 1, 0, 0); w4.push(0, 1, 0, 0); w5.push(0, 1, 1, 1); }
		if (string[v] == "d") { w1.push(0, 1, 1, 0); w2.push(0, 1, 0, 1); w3.push(0, 1, 0, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 0); }
		if (string[v] == "e") { w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 0); w3.push(0, 1, 1, 0); w4.push(0, 1, 0, 0); w5.push(0, 1, 1, 1); }
		if (string[v] == "f") { w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 0); w3.push(0, 1, 1, 1); w4.push(0, 1, 0, 0); w5.push(0, 1, 0, 0); }
		if (string[v] == "g") { w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 0); w3.push(0, 1, 0, 0); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1); }
		if (string[v] == "h") { w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 0, 1); }
		if (string[v] == "i") { w1.push(0, 1, 1, 1); w2.push(0, 0, 1, 0); w3.push(0, 0, 1, 0); w4.push(0, 0, 1, 0); w5.push(0, 1, 1, 1); }
		if (string[v] == "j") { w1.push(0, 0, 0, 1); w2.push(0, 0, 0, 1); w3.push(0, 0, 0, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1); }
		if (string[v] == "k") { w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 0); w4.push(0, 1, 0, 1); w5.push(0, 1, 0, 1); }
		if (string[v] == "l") { w1.push(0, 1, 0, 0); w2.push(0, 1, 0, 0); w3.push(0, 1, 0, 0); w4.push(0, 1, 0, 0); w5.push(0, 1, 1, 1); }
		if (string[v] == "m") { w1.push(0, 1, 0, 1); w2.push(0, 1, 1, 1); w3.push(0, 1, 0, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 0, 1); }
		if (string[v] == "n") { w1.push(0, 1, 0, 1); w2.push(0, 1, 1, 1); w3.push(0, 1, 1, 1); w4.push(0, 1, 1, 1); w5.push(0, 1, 0, 1); }
		if (string[v] == "o") { w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 0, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1); }
		if (string[v] == "p") { w1.push(0, 1, 1, 0); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 0); w4.push(0, 1, 0, 0); w5.push(0, 1, 0, 0); }
		if (string[v] == "q") { w1.push(0, 0, 1, 0); w2.push(0, 1, 0, 1); w3.push(0, 1, 0, 1); w4.push(0, 0, 1, 0); w5.push(0, 0, 0, 1); }
		if (string[v] == "r") { w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 0); w4.push(0, 1, 0, 1); w5.push(0, 1, 0, 1); }
		if (string[v] == "s") { w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 0); w3.push(0, 1, 1, 1); w4.push(0, 0, 0, 1); w5.push(0, 1, 1, 1); }
		if (string[v] == "t") { w1.push(0, 1, 1, 1); w2.push(0, 0, 1, 0); w3.push(0, 0, 1, 0); w4.push(0, 0, 1, 0); w5.push(0, 0, 1, 0); }
		if (string[v] == "u") { w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 0, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1); }
		if (string[v] == "v") { w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 0, 1); w4.push(0, 1, 0, 1); w5.push(0, 0, 1, 0); }
		if (string[v] == "w") { w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 0, 1); w4.push(0, 1, 1, 1); w5.push(0, 1, 0, 1); }
		if (string[v] == "x") { w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 0, 1, 0); w4.push(0, 1, 0, 1); w5.push(0, 1, 0, 1); }
		if (string[v] == "y") { w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 0, 1, 0); w4.push(0, 0, 1, 0); w5.push(0, 0, 1, 0); }
		if (string[v] == "z") { w1.push(0, 1, 1, 1); w2.push(0, 0, 0, 1); w3.push(0, 0, 1, 0); w4.push(0, 1, 0, 0); w5.push(0, 1, 1, 1); }
		if (string[v] == "1") { w1.push(0, 0, 1, 0); w2.push(0, 1, 1, 0); w3.push(0, 0, 1, 0); w4.push(0, 0, 1, 0); w5.push(0, 1, 1, 1); }
		if (string[v] == "2") { w1.push(0, 1, 1, 1); w2.push(0, 0, 0, 1); w3.push(0, 0, 1, 0); w4.push(0, 1, 0, 0); w5.push(0, 1, 1, 1); }
		if (string[v] == "3") { w1.push(0, 1, 1, 1); w2.push(0, 0, 0, 1); w3.push(0, 0, 1, 1); w4.push(0, 0, 0, 1); w5.push(0, 1, 1, 1); }
		if (string[v] == "4") { w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 1); w4.push(0, 0, 0, 1); w5.push(0, 0, 0, 1); }
		if (string[v] == "5") { w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 0); w3.push(0, 1, 1, 0); w4.push(0, 0, 0, 1); w5.push(0, 1, 1, 1); }
		if (string[v] == "6") { w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 0); w3.push(0, 1, 1, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1); }
		if (string[v] == "7") { w1.push(0, 1, 1, 1); w2.push(0, 0, 0, 1); w3.push(0, 0, 0, 1); w4.push(0, 0, 1, 0); w5.push(0, 0, 1, 0); }
		if (string[v] == "8") { w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1); }
		if (string[v] == "9") { w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 1); w4.push(0, 0, 0, 1); w5.push(0, 0, 0, 1); }
		if (string[v] == "0") { w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 0, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1); }
		if (string[v] == " ") { w1.push(0, 0, 0, 0); w2.push(0, 0, 0, 0); w3.push(0, 0, 0, 0); w4.push(0, 0, 0, 0); w5.push(0, 0, 0, 0); }

		if (w1[v] == 1) { ctx.fillRect(x + v * 20, y, 18, 18) }
		if (w2[v] == 1) { ctx.fillRect(x + v * 20, y + 20, 18, 18) }
		if (w3[v] == 1) { ctx.fillRect(x + v * 20, y + 40, 18, 18) }
		if (w4[v] == 1) { ctx.fillRect(x + v * 20, y + 60, 18, 18) }
		if (w5[v] == 1) { ctx.fillRect(x + v * 20, y + 80, 18, 18) }
		v++


	}
}
