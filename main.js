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
var hy = ["e"];
var vx = ["e"]; 
var ax = ["e"];
var h1;
var h2;
var h3;
var v1;
var v2;
var v3;
var a1;
var food = ["e"];
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


document.addEventListener("keydown", function (event){
if(start == false){
start = true;
levelstart();
    if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }
}	
	
});

document.addEventListener("touchstart", function (event){
if(start == false){
start = true;
levelstart();
    if (Tone.context.state !== 'running') {
        Tone.context.resume();
    }
}	
	
});



document.addEventListener("keydown", keydownhandler);

ctx.scale(window.innerWidth / 46 / 20, window.innerHeight / 30 / 20)


function keydownhandler(){
	// set movement dir
	if(event.code == "ArrowRight"){
	dir = 3;
	}
	if(event.code == "ArrowLeft"){
	dir = 1;
	}
	if(event.code == "ArrowUp"){
	dir = 2;
	}
	if(event.code == "ArrowDown"){
	dir = 4;

	}
	
}


function loop(){
	
	
	if(start == false){
	write(["e", "a", "t"], "white", 321, 121);
	write(["p", "r", "e", "s", "s"], "yellow", 241, 241);
	write(["t", "o", " ", "p", "l", "a", "y"], "red", 161, 361);
	}
	
	else{
	
	
	if(intro < 10 * (500 / speed)){
	
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, cnv.width, cnv.height)
	if(startintro == true && intro < 3 * (500 / speed)){
	write(["e", "a", "t"], "white", 321, 221);
	}
	else if(startintro == true && intro < 7 * (500 / speed)){
	write(["l", "e", "v", "e", "l", " ", "1"], "white", 121, 221);
	}
	else if(startintro == true && intro < 10 * (500 / speed)){
	write(["3", " ", "g", "u", "y", "s", " ", "l", "e", "f", "t"], "lime", 21, 221);
	}
	
	if(levelintro == true && intro < 5 * (500 / speed) && startintro == false){
	write(["l", "e", "v", "e", "l", " ", level], "white", 121, 221);
	}
	
	else if(intro < 10 * (500 / speed) && startintro == false){
	if(lives == 3){
	write(["3", " ", "g", "u", "y", "s", " ", "l", "e", "f", "t"], "lime", 21, 221);
	}
	if(lives == 2){
	write(["2", " ", "g", "u", "y", "s", " ", "l", "e", "f", "t"], "yellow", 21, 221);
	}
	if(lives == 1){
	write(["1", " ", "g", "u", "y", " ", "l", "e", "f", "t"], "red", 61, 221);
	}
	} 

	intro = intro + 1;
	
		// draw wall
	var b = 0;
	var bx = 1;
	var by = 1;
	

	while(b != 149){
		
	ctx.fillRect(bx, by, 18, 18);
	ctx.fillStyle = "gray";
	
	b = b + 1;
	
	if(b < 30){
	by = by + 20;
	}
	
	else if(b > 29 && b < 75){
	bx = bx + 20;
	
	if (b == 30 && level > 0){ctx.fillStyle = "blue";}
	if (b == 32 && level > 1){ctx.fillStyle = "green";}	
	if (b == 34 && level > 2){ctx.fillStyle = "yellow";}
	if (b == 36 && level > 3){ctx.fillStyle = "orange";}
	if (b == 38 && level > 4){ctx.fillStyle = "red";}
	if (b == 40 && level > 5){ctx.fillStyle = "violet";}
	if (b == 42 && level > 6){ctx.fillStyle = "pink";}
	if (b == 44 && level > 7){ctx.fillStyle = "orangered";}
	if (b == 46 && level > 8){ctx.fillStyle = "aqua";}
	if (b == 48 && level > 9){ctx.fillStyle = "DarkKhaki";}
	if (b == 50 && level > 10){ctx.fillStyle = "white";}
	if (b == 52 && level > 11){ctx.fillStyle = "lime";}
	if (b == 54 && level > 12){ctx.fillStyle = "magenta";}
	if (b == 56 && level > 13){ctx.fillStyle = "navy";}
	if (b == 58 && level > 14){ctx.fillStyle = "Sienna";}
	if (b == 60 && level > 15){ctx.fillStyle = "SpringGreen";}
	if (b == 62 && level > 16){ctx.fillStyle = "brown";}
	if (b == 64 && level > 17){ctx.fillStyle = "YellowGreen";}
	if (b == 66 && level > 18){ctx.fillStyle = "DarkCyan";}
	if (b == 68 && level > 19){ctx.fillStyle = "coral";}
	if (b == 70 && level > 20){ctx.fillStyle = "Cornsilk";}
	if (b == 72 && level > 21){ctx.fillStyle = "Crimson";}
	if (b == 74 && level > 22){ctx.fillStyle = "AliceBlue";}
	}
	
	else if(b < 104){
	by = by - 20;
	}
	
	else if(b < 149){
	bx = bx - 20;0
	
	if (b == 147 && lives == 3) {ctx.fillStyle = "lime";}
	if (b == 145 && lives == 3) {ctx.fillStyle = "lime";}
	if (b == 143 && lives == 3) {ctx.fillStyle = "lime";}
	if (b == 147 && lives == 2) {ctx.fillStyle = "yellow";}
	if (b == 145 && lives == 2) {ctx.fillStyle = "yellow";}
	if (b == 147 && lives == 1) {ctx.fillStyle = "red";}
	}
	} 
	}
	
	else{


	startintro = false;
	levelintro = false;
	
	//draw back
	if(warping == true){ctx.fillStyle = "orangered";}
	else if(gameover == true) {ctx.fillStyle = "darkred";}
	else if(finish == true) {ctx.fillStyle = "LawnGreen";}
	else if(dead == false){ctx.fillStyle = "black";}
	else{ctx.fillStyle = "red";}
	ctx.fillRect(0, 0, cnv.width, cnv.height)
	
	// player move
	if(dead == false){
	if(dir == 3){px += 20;} 
	else if(dir == 1){px -= 20;}
	else if(dir == 2){py -= 20;}
	else if(dir == 4){py += 20;}
	}
	

	
	// draw wall
	var b = 0;
	var bx = 1;
	var by = 1;
	

	while(b != 149){
		
	ctx.fillRect(bx, by, 18, 18);
	ctx.fillStyle = "gray";
	
	b = b + 1;
	
	if(b < 30){
	by = by + 20;
	}
	
	else if(b > 29 && b < 75){
	bx = bx + 20;
	
	if (b == 30 && level > 0){ctx.fillStyle = "blue";}
	if (b == 32 && level > 1){ctx.fillStyle = "green";}	
	if (b == 34 && level > 2){ctx.fillStyle = "yellow";}
	if (b == 36 && level > 3){ctx.fillStyle = "orange";}
	if (b == 38 && level > 4){ctx.fillStyle = "red";}
	if (b == 40 && level > 5){ctx.fillStyle = "violet";}
	if (b == 42 && level > 6){ctx.fillStyle = "pink";}
	if (b == 44 && level > 7){ctx.fillStyle = "orangered";}
	if (b == 46 && level > 8){ctx.fillStyle = "aqua";}
	if (b == 48 && level > 9){ctx.fillStyle = "DarkKhaki";}
	if (b == 50 && level > 10){ctx.fillStyle = "white";}
	if (b == 52 && level > 11){ctx.fillStyle = "lime";}
	if (b == 54 && level > 12){ctx.fillStyle = "magenta";}
	if (b == 56 && level > 13){ctx.fillStyle = "navy";}
	if (b == 58 && level > 14){ctx.fillStyle = "Sienna";}
	if (b == 60 && level > 15){ctx.fillStyle = "SpringGreen";}
	if (b == 62 && level > 16){ctx.fillStyle = "brown";}
	if (b == 64 && level > 17){ctx.fillStyle = "YellowGreen";}
	if (b == 66 && level > 18){ctx.fillStyle = "DarkCyan";}
	if (b == 68 && level > 19){ctx.fillStyle = "coral";}
	if (b == 70 && level > 20){ctx.fillStyle = "Cornsilk";}
	if (b == 72 && level > 21){ctx.fillStyle = "Crimson";}
	if (b == 74 && level > 22){ctx.fillStyle = "AliceBlue";}
	}
	
	else if(b < 104){
	by = by - 20;
	}
	
	else if(b < 149){
	bx = bx - 20;0
	
	if (b == 147 && lives == 3) {ctx.fillStyle = "lime";}
	if (b == 145 && lives == 3) {ctx.fillStyle = "lime";}
	if (b == 143 && lives == 3) {ctx.fillStyle = "lime";}
	if (b == 147 && lives == 2) {ctx.fillStyle = "yellow";}
	if (b == 145 && lives == 2) {ctx.fillStyle = "yellow";}
	if (b == 147 && lives == 1) {ctx.fillStyle = "red";}
	}
	} 
	
	// wall teleporting
	if(py > 561){py = 21; warp = false;}
	if(py < 21){py = 561; warp = false;}
	if(px < 21){px = 881; warp = false;}
	if(px > 881){px = 21; warp = false;}
	

	
	// monster
	if(finish == false){
	if(Math.floor(Math.random() * slow) !== 0){
	if(px > mx){mx = mx + 20;}
	if(px < mx){mx = mx - 20;}
	if(py > my){my = my + 20;}
	if(py < my){my = my - 20;}

	}
	}
	
	

	
	// food
	{//h1
	var fx = 461 - (h1 * 20) / 2;
	var fy = 281 - hy[3] * 20;
	for (i = 0; i < h1; i++){
	if(!food.includes("h1" + fx, 0)){
	ctx.fillStyle = "blue"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("h1" + fx);
		left -= 1;
		if(frequency == 100){frequency = 800;}
		else if (frequencyold == frequency){frequency = frequency - 25;}
		}
	if(441 - ax[1] * 20 == fx && level > 4) {food.push("h1" + fx); left -= 1;}
	if(461 + ax[1] * 20 == fx && level > 4) {food.push("h1" + fx); left -= 1;}
	}
	fx = fx + 20;
}

	var fx = 461 - (h1 * 20) / 2;
	var fy = 301 + hy[3] * 20;
	for (i = 0; i < h1; i++){
	if(!food.includes("h2" + fx, 0)){
	ctx.fillStyle = "blue"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("h2" + fx);
		left -= 1;
		if(frequency == 100){frequency = 800;}
		else if (frequencyold == frequency){frequency = frequency - 25;}
		}
	if(441 - ax[1] * 20 == fx && level > 4) {food.push("h2" + fx); left -= 1;}
	if(461 + ax[1] * 20 == fx && level > 4) {food.push("h2" + fx); left -= 1;}
	}
	fx = fx + 20;
}
	}
	
	{//v1
	var fx = 461 + vx[3] * 20;
	var fy = 301 - (v1 * 20) / 2;;
	for (i = 0; i < v1; i++){
	if(!food.includes("v1" + fy, 0)){
	ctx.fillStyle = "DarkCyan"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("v1" + fy);
		left -= 1;
		if(frequency == 100){frequency = 800;}
		else if (frequencyold == frequency){frequency = frequency - 25;}
		}
	}
	fy = fy + 20;
}

	var fx = 441 - vx[3] * 20;
	var fy = 301 - (v1 * 20) / 2;
	for (i = 0; i < v1; i++){
	if(!food.includes("v2" + fy, 0)){
	ctx.fillStyle = "DarkCyan"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("v2" + fy);
		left -= 1;
		if(frequency == 100){frequency = 800;}
		else if (frequencyold == frequency){frequency = frequency - 25;}
		}
	}
	fy = fy + 20;
}
	}
	
	if(level > 1){
		
	{//h2
	var fx = 461 - (h2 * 20) / 2;
	var fy = 281 - hy[2] * 20;
	for (i = 0; i < h2; i++){
	if(!food.includes("h3" + fx, 0)){
	ctx.fillStyle = "blue"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("h3" + fx);
		left -= 1;
		if(frequency == 100){frequency = 800;}
		else if (frequencyold == frequency){frequency = frequency - 25;}
		}
	if(441 - ax[1] * 20 == fx && level > 4) {food.push("h3" + fx); left -= 1;}
	if(461 + ax[1] * 20 == fx && level > 4) {food.push("h3" + fx); left -= 1;}	
	}
	fx = fx + 20;
}

	var fx = 461 - (h2 * 20) / 2;
	var fy = 301 + hy[2] * 20;
	for (i = 0; i < h2; i++){
	if(!food.includes("h4" + fx, 0)){
	ctx.fillStyle = "blue"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("h4" + fx);
		left -= 1;
		if(frequency == 100){frequency = 800;}
		else if (frequencyold == frequency){frequency = frequency - 25;}
		}
	if(441 - ax[1] * 20 == fx && level > 4) {food.push("h4" + fx); left -= 1;}
	if(461 + ax[1] * 20 == fx && level > 4) {food.push("h4" + fx); left -= 1;}
	}
	fx = fx + 20;
}
	}
	
	{//v2
	var fx = 461 + vx[2] * 20;
	var fy = 301 - (v2 * 20) / 2;;
	for (i = 0; i < v2; i++){
	if(!food.includes("v3" + fy, 0)){
	ctx.fillStyle = "DarkCyan"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("v3" + fy);
		left -= 1;
		if(frequency == 100){frequency = 800;}
		else if (frequencyold == frequency){frequency = frequency - 25;}
		}
	}
	fy = fy + 20;
}

	var fx = 441 - vx[2] * 20;
	var fy = 301 - (v2 * 20) / 2;
	for (i = 0; i < v2; i++){
	if(!food.includes("v4" + fy, 0)){
	ctx.fillStyle = "DarkCyan"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("v4" + fy);
		left -= 1;
		if(frequency == 100){frequency = 800;}
		else if (frequencyold == frequency){frequency = frequency - 25;}
		}
	}
	fy = fy + 20;
}		
	
	
}
	}

	if(level > 3){
		
	{//h3
	var fx = 461 - (h3 * 20) / 2;
	var fy = 281 - hy[1] * 20;
	for (i = 0; i < h3; i++){
	if(!food.includes("h5" + fx, 0)){
	ctx.fillStyle = "blue"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("h5" + fx);
		left -= 1;
		if(frequency == 100){frequency = 800;}
		else if (frequencyold == frequency){frequency = frequency - 25;}
		}
	if(441 - ax[1] * 20 == fx && level > 4) {food.push("h5" + fx); left -= 1;}
	if(461 + ax[1] * 20 == fx && level > 4) {food.push("h5" + fx); left -= 1;}
	}
	fx = fx + 20;
}

	var fx = 461 - (h3 * 20) / 2;
	var fy = 301 + hy[1] * 20;
	for (i = 0; i < h3; i++){
	if(!food.includes("h6" + fx, 0)){
	ctx.fillStyle = "blue"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("h6" + fx);
		left -= 1;
		if(frequency == 100){frequency = 800;}
		else if (frequencyold == frequency){frequency = frequency - 25;}
		}
	if(441 - ax[1] * 20 == fx && level > 4) {food.push("h6" + fx); left -= 1;}
	if(461 + ax[1] * 20 == fx && level > 4) {food.push("h6" + fx); left -= 1;}
	}
	fx = fx + 20;
}
	}
	
{//v3
	var fx = 461 + vx[1] * 20;
	var fy = 301 - (v3 * 20) / 2;;
	for (i = 0; i < v3; i++){
	if(!food.includes("v5" + fy, 0)){
	ctx.fillStyle = "DarkCyan"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("v5" + fy);
		left -= 1;
		if(frequency == 100){frequency = 800;}
		else if (frequencyold == frequency){frequency = frequency - 25;}
		}
	}
	fy = fy + 20;
}

	var fx = 441 - vx[1] * 20;
	var fy = 301 - (v3 * 20) / 2;
	for (i = 0; i < v3; i++){
	if(!food.includes("v6" + fy, 0)){
	ctx.fillStyle = "DarkCyan"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("v6" + fy);
		left -= 1;
		if(frequency == 100){frequency = 800;}
		else if (frequencyold == frequency){frequency = frequency - 25;}
		}
	}
	fy = fy + 20;
}		
	
	
}
	}
	
	//sound
	if(frequencyold !== frequency){
	frequencyold = frequency;
	}
	else if(frequencyold == frequency){
	frequency = 100;
	}

var synth = new Tone.Synth({
	oscillator : {
    modulationType : 'sine',
  },
  envelope : {
  	attack : 0.001,
    decay : 0.1,
    sustain: 0.1,
    release: 0.1
  }
}).toMaster()


synth.triggerAttackRelease(frequency, 0.01)

	
	

	//white lines
	
	if(level > 4){
		{//a1
	var fx = 461 + ax[1] * 20;
	var fy = 301 - (a1 * 20) / 2;;
	for (i = 0; i < a1; i++){
	ctx.fillStyle = "White"
	ctx.fillRect(fx, fy, 18, 18);
	if(px == fx && py == fy){
	if(dir == 1){px = px + 20; dir = 0;}
	if(dir == 2){py = py + 20; dir = 0;}
	if(dir == 3){px = px - 20; dir = 0;}
	if(dir == 4){py = py - 20; dir = 0;}
	}
	if(mx == fx && my == fy){
	if(px > mx)	{mx = mx - 20;}
	else if(px < mx){mx = mx + 20;}
	
	else if (px == mx){
	if(dir == 1){mx = mx + 20;}
	else if(dir == 3){mx = mx - 20;}
	

	}


	}
	
	fy = fy + 20;
}
	

	var fx = 441 - ax[1] * 20;
	var fy = 301 - (a1 * 20) / 2;
	for (i = 0; i < a1; i++){
	ctx.fillStyle = "White"
	ctx.fillRect(fx, fy, 18, 18);
	if(px == fx && py == fy){
	if(dir == 1){px = px + 20; dir = 0;}
	if(dir == 2){py = py + 20; dir = 0;}
	if(dir == 3){px = px - 20; dir = 0;}
	if(dir == 4){py = py - 20; dir = 0;}
	}
	if(mx == fx && my == fy){
	if(px > mx)	{mx = mx - 20;}
	else if(px < mx){mx = mx + 20;}
	
	else if (px == mx){
	if(dir == 1){
	mx = mx + 20;
	
	}
	else if(dir == 3){mx = mx - 20;}
	
	
	}

	}
	fy = fy + 20;
}		
	
	
}
	}
	
	//draw player/monster
	if(dead == false){
	ctx.fillStyle = "yellow";
	ctx.fillRect(px, py, 18, 18);
	}
	ctx.fillStyle = "red";
	ctx.fillRect(mx, my, 18, 18);
	

	
	if(lives == 0){
	lives = 3;
	gameover = true;
	finish = true;
	setTimeout(gameend, 1500);
	}
	
	if(left < 1){
	left = 1;
	finish = true;
	if(warp == true){
	warping = true;
	}
	setTimeout(levelstart, 1000);
	}
	
	//death
	if(finish == false){
		if(px == mx && py == my && lives != 0){
		dead = true; 
		setTimeout(newlife, 1000);
		px = 21;
		py = 561;
		mx = 881;
		my = 21;
		}
	}
 
}
}
}


function levelstart(){
	if(warping == true){
	slow = 6;
	level = 4;
	speed = 200;	
	}
	
	px = 21;
	py = 561;
	mx = 881;
	my = 21;
	h1 = (Math.floor(Math.random() * 8) + 4) * 2 ;
	v1 = (Math.floor(Math.random() * 8) + 4) * 2 ;
	h2 = (Math.floor(Math.random() * 8) + 4) * 2 ;
	v2 = (Math.floor(Math.random() * 8) + 4) * 2 ;
	h3 = (Math.floor(Math.random() * 8) + 4) * 2 ;
	v3 = (Math.floor(Math.random() * 8) + 4) * 2 ;
	a1 = (Math.floor(Math.random() * 8) + 4) * 2 ;
	hy.push(Math.floor(Math.random() * 10 + 2), Math.floor(Math.random() * 10 + 2), Math.floor(Math.random() * 10 + 2))
	vx.push(Math.floor(Math.random() * 12 + 2), Math.floor(Math.random() * 12 + 2), Math.floor(Math.random() * 12 + 2))
	ax.push(Math.floor(Math.random() * 12 + 2), Math.floor(Math.random() * 12 + 2), Math.floor(Math.random() * 12 + 2))
	
	while(ax[1] == vx[1] | ax[1] == vx[2] |ax[1] == vx[3]){
	ax = ["e"]
	
	ax.push(Math.floor(Math.random() * 12 + 2), Math.floor(Math.random() * 12 + 2), Math.floor(Math.random() * 12 + 2))
	}

	while(ax[2] == vx[1] | ax[2] == vx[2] |ax[2] == vx[3]){
	ax = ["e"]
	
	ax.push(Math.floor(Math.random() * 12 + 2), Math.floor(Math.random() * 12 + 2), Math.floor(Math.random() * 12 + 2))
	}
	
	while(ax[3] == vx[1] | ax[3] == vx[2] |ax[3] == vx[3]){
	ax = ["e"]
	
	ax.push(Math.floor(Math.random() * 12 + 2), Math.floor(Math.random() * 12 + 2), Math.floor(Math.random() * 12 + 2))
	}
	
	level = level + 1;
	slow++
	if(slow > 7){slow = 7;}
	food = ["e"]
	if(speed > 100){speed = speed - 100;}
	else{speed = speed - 25;}
	if(speed < 25){speed = 25;}
	dir = 0;
	finish = false;
	if(level == 1){left = h1 * 2 + v1 * 2;}
	else if(level > 3){left = h1 * 2 + v1 * 2 + h2 * 2 + v2 * 2 + h3 * 2 + v3 * 2;}
	else{left = h1 * 2 + v1 * 2 + h2 * 2 + v2 * 2;}
	clearInterval(interval);
	interval = setInterval(loop, speed);
	levelintro = true;
	warping = false;
	intro = 0;
}




function newlife(){
	if (gameover == false){
	px = 21;
	py = 561;
	mx = 881;
	my = 21;
	dir = 0;
	lives--;
	dead = false;
	intro = 5;
	}
}

function gameend(){
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
	if(level == 1){left = h1 * 2 + v1 * 2;}
	else if(level > 3){left = h1 * 2 + v1 * 2 + h2 * 2 + v2 * 2 + h3 * 2 + v3 * 2;}
	else{left = h1 * 2 + v1 * 2 + h2 * 2 + v2 * 2;}
	warp = true;

}


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
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            dir = 1;
        } else {
            dir = 3;
        }                       
    } else {
        if ( yDiff > 0 ) {
            dir = 2;
        } else { 
            dir = 4;
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};



// writes string on canvas
function write(string, color, x, y){
	ctx.fillStyle = color;
	var w1 = [ ]; 
	var w2 = [ ];
	var w3 = [ ];
	var w4 = [ ];
	var w5 = [ ];	
	var v = 0;
	while(v < 44){
	if(string[v] == "a"){w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 0, 1);}
	if(string[v] == "b"){w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1);}
	if(string[v] == "c"){w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 0); w3.push(0, 1, 0, 0); w4.push(0, 1, 0, 0); w5.push(0, 1, 1, 1);}
	if(string[v] == "d"){w1.push(0, 1, 1, 0); w2.push(0, 1, 0, 1); w3.push(0, 1, 0, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 0);}
	if(string[v] == "e"){w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 0); w3.push(0, 1, 1, 0); w4.push(0, 1, 0, 0); w5.push(0, 1, 1, 1);}
	if(string[v] == "f"){w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 0); w3.push(0, 1, 1, 1); w4.push(0, 1, 0, 0); w5.push(0, 1, 0, 0);}
	if(string[v] == "g"){w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 0); w3.push(0, 1, 0, 0); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1);}
	if(string[v] == "h"){w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 0, 1);}
	if(string[v] == "i"){w1.push(0, 1, 1, 1); w2.push(0, 0, 1, 0); w3.push(0, 0, 1, 0); w4.push(0, 0, 1, 0); w5.push(0, 1, 1, 1);}
	if(string[v] == "j"){w1.push(0, 0, 0, 1); w2.push(0, 0, 0, 1); w3.push(0, 0, 0, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1);}
	if(string[v] == "k"){w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 0); w4.push(0, 1, 0, 1); w5.push(0, 1, 0, 1);}
	if(string[v] == "l"){w1.push(0, 1, 0, 0); w2.push(0, 1, 0, 0); w3.push(0, 1, 0, 0); w4.push(0, 1, 0, 0); w5.push(0, 1, 1, 1);}
	if(string[v] == "m"){w1.push(0, 1, 0, 1); w2.push(0, 1, 1, 1); w3.push(0, 1, 0, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 0, 1);}
	if(string[v] == "n"){w1.push(0, 1, 0, 1); w2.push(0, 1, 1, 1); w3.push(0, 1, 1, 1); w4.push(0, 1, 1, 1); w5.push(0, 1, 0, 1);}
	if(string[v] == "o"){w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 0, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1);}
	if(string[v] == "p"){w1.push(0, 1, 1, 0); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 0); w4.push(0, 1, 0, 0); w5.push(0, 1, 0, 0);}
	if(string[v] == "q"){w1.push(0, 0, 1, 0); w2.push(0, 1, 0, 1); w3.push(0, 1, 0, 1); w4.push(0, 0, 1, 0); w5.push(0, 0, 0, 1);}
	if(string[v] == "r"){w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 0); w4.push(0, 1, 0, 1); w5.push(0, 1, 0, 1);}
	if(string[v] == "s"){w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 0); w3.push(0, 1, 1, 1); w4.push(0, 0, 0, 1); w5.push(0, 1, 1, 1);}
	if(string[v] == "t"){w1.push(0, 1, 1, 1); w2.push(0, 0, 1, 0); w3.push(0, 0, 1, 0); w4.push(0, 0, 1, 0); w5.push(0, 0, 1, 0);}	
	if(string[v] == "u"){w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 0, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1);}
	if(string[v] == "v"){w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 0, 1); w4.push(0, 1, 0, 1); w5.push(0, 0, 1, 0);}
	if(string[v] == "w"){w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 0, 1); w4.push(0, 1, 1, 1); w5.push(0, 1, 0, 1);}
	if(string[v] == "x"){w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 0, 1, 0); w4.push(0, 1, 0, 1); w5.push(0, 1, 0, 1);}
	if(string[v] == "y"){w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 0, 1, 0); w4.push(0, 0, 1, 0); w5.push(0, 0, 1, 0);}
	if(string[v] == "z"){w1.push(0, 1, 1, 1); w2.push(0, 0, 0, 1); w3.push(0, 0, 1, 0); w4.push(0, 1, 0, 0); w5.push(0, 1, 1, 1);}
	if(string[v] == "1"){w1.push(0, 0, 1, 0); w2.push(0, 1, 1, 0); w3.push(0, 0, 1, 0); w4.push(0, 0, 1, 0); w5.push(0, 1, 1, 1);}
	if(string[v] == "2"){w1.push(0, 1, 1, 1); w2.push(0, 0, 0, 1); w3.push(0, 0, 1, 0); w4.push(0, 1, 0, 0); w5.push(0, 1, 1, 1);}
	if(string[v] == "3"){w1.push(0, 1, 1, 1); w2.push(0, 0, 0, 1); w3.push(0, 0, 1, 1); w4.push(0, 0, 0, 1); w5.push(0, 1, 1, 1);}
	if(string[v] == "4"){w1.push(0, 1, 0, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 1); w4.push(0, 0, 0, 1); w5.push(0, 0, 0, 1);}
	if(string[v] == "5"){w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 0); w3.push(0, 1, 1, 0); w4.push(0, 0, 0, 1); w5.push(0, 1, 1, 1);}
	if(string[v] == "6"){w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 0); w3.push(0, 1, 1, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1);}
	if(string[v] == "7"){w1.push(0, 1, 1, 1); w2.push(0, 0, 0, 1); w3.push(0, 0, 0, 1); w4.push(0, 0, 1, 0); w5.push(0, 0, 1, 0);}
	if(string[v] == "8"){w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1);}
	if(string[v] == "9"){w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 1, 1); w4.push(0, 0, 0, 1); w5.push(0, 0, 0, 1);}
	if(string[v] == "0"){w1.push(0, 1, 1, 1); w2.push(0, 1, 0, 1); w3.push(0, 1, 0, 1); w4.push(0, 1, 0, 1); w5.push(0, 1, 1, 1);}
	if(string[v] == " "){w1.push(0, 0, 0, 0); w2.push(0, 0, 0, 0); w3.push(0, 0, 0, 0); w4.push(0, 0, 0, 0); w5.push(0, 0, 0, 0);}

	if(w1[v] == 1) {ctx.fillRect(x + v * 20, y, 18, 18)}
	if(w2[v] == 1) {ctx.fillRect(x + v * 20, y + 20, 18, 18)}
	if(w3[v] == 1) {ctx.fillRect(x + v * 20, y + 40, 18, 18)}
	if(w4[v] == 1) {ctx.fillRect(x + v * 20, y + 60, 18, 18)}
	if(w5[v] == 1) {ctx.fillRect(x + v * 20, y + 80, 18, 18)}
	v = v + 1;
	

	}
}
