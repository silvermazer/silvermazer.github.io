let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

var gameover = false;
var lives = 3;
var speed = 600;
var level = 0;
var slow = 1;
var left;
var hy = ["e"];
var vx = ["e"]; 
var h1;
var h2;
var h3;
var v1;
var v2;
var v3;
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

var interval = setInterval(loop, speed);


levelstart();

document.addEventListener("keydown", keydownhandler);



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
	
	console.log(warp);
	
	// draw wall
	var b = 0;
	var bx = 1;
	var by = 1;
	

	while(b != 136){
		
	ctx.fillStyle = "gray";
	ctx.fillRect(bx, by, 18, 18);	
	b = b + 1;
	
	if(b < 30){
	by = by + 20;
	}
	
	else if(b > 29 && b < 69){
	bx = bx + 20;
	}
	
	else if(b < 98){
	by = by - 20;
	}
	
	else if(b < 140){
	bx = bx - 20;0
	}
	} 
	
	// wall teleporting
	if(py > 561){py = 21; warp = false;}
	if(py < 21){py = 561; warp = false;}
	if(px < 21){px = 761; warp = false;}
	if(px > 761){px = 21; warp = false;}
	

	
	// monster
	if(finish == false){
	if(Math.floor(Math.random() * slow) !== 0){
	if(px > mx){mx = mx + 20;}
	if(px < mx){mx = mx - 20;}
	if(py > my){my = my + 20;}
	if(py < my){my = my - 20;}
	if(px == mx && py == my && lives != 0){
		dead = true; 
		setTimeout(newlife, 1000);
		px = 21;
		py = 561;
		mx = 761;
		my = 21;
		}
	}
	}
	
	// food
	{//h1
	var fx = 401 - (h1 * 20) / 2;
	var fy = 281 - hy[3] * 20;
	for (i = 0; i < h1; i++){
	if(!food.includes("h1" + fx, 0)){
	ctx.fillStyle = "blue"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("h1" + fx);
		left -= 1;
		}
	}
	fx = fx + 20;
}

	var fx = 401 - (h1 * 20) / 2;
	var fy = 301 + hy[3] * 20;
	for (i = 0; i < h1; i++){
	if(!food.includes("h2" + fx, 0)){
	ctx.fillStyle = "blue"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("h2" + fx);
		left -= 1;
		}
	}
	fx = fx + 20;
}
	}
	
	{//v1
	var fx = 401 + vx[3] * 20;
	var fy = 301 - (v1 * 20) / 2;;
	for (i = 0; i < v1; i++){
	if(!food.includes("v1" + fy, 0)){
	ctx.fillStyle = "DarkCyan"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("v1" + fy);
		left -= 1;
		}
	}
	fy = fy + 20;
}

	var fx = 381 - vx[3] * 20;
	var fy = 301 - (v1 * 20) / 2;
	for (i = 0; i < v1; i++){
	if(!food.includes("v2" + fy, 0)){
	ctx.fillStyle = "DarkCyan"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("v2" + fy);
		left -= 1;
		}
	}
	fy = fy + 20;
}
	}
	
	if(level > 1){
		
	{//h2
	var fx = 401 - (h2 * 20) / 2;
	var fy = 281 - hy[2] * 20;
	for (i = 0; i < h2; i++){
	if(!food.includes("h3" + fx, 0)){
	ctx.fillStyle = "blue"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("h3" + fx);
		left -= 1;
		}
	}
	fx = fx + 20;
}

	var fx = 401 - (h2 * 20) / 2;
	var fy = 301 + hy[2] * 20;
	for (i = 0; i < h2; i++){
	if(!food.includes("h4" + fx, 0)){
	ctx.fillStyle = "blue"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("h4" + fx);
		left -= 1;
		}
	}
	fx = fx + 20;
}
	}
	
	{//v2
	var fx = 401 + vx[2] * 20;
	var fy = 301 - (v2 * 20) / 2;;
	for (i = 0; i < v2; i++){
	if(!food.includes("v3" + fy, 0)){
	ctx.fillStyle = "DarkCyan"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("v3" + fy);
		left -= 1;
		}
	}
	fy = fy + 20;
}

	var fx = 381 - vx[2] * 20;
	var fy = 301 - (v2 * 20) / 2;
	for (i = 0; i < v2; i++){
	if(!food.includes("v4" + fy, 0)){
	ctx.fillStyle = "DarkCyan"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("v4" + fy);
		left -= 1;
		}
	}
	fy = fy + 20;
}		
	
	
}
	}

	if(level > 3){
		
	{//h3
	var fx = 401 - (h3 * 20) / 2;
	var fy = 281 - hy[1] * 20;
	for (i = 0; i < h3; i++){
	if(!food.includes("h5" + fx, 0)){
	ctx.fillStyle = "blue"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("h5" + fx);
		left -= 1;
		}
	}
	fx = fx + 20;
}

	var fx = 401 - (h3 * 20) / 2;
	var fy = 301 + hy[1] * 20;
	for (i = 0; i < h3; i++){
	if(!food.includes("h6" + fx, 0)){
	ctx.fillStyle = "blue"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("h6" + fx);
		left -= 1;
		}
	}
	fx = fx + 20;
}
	}
	
{//v3
	var fx = 401 + vx[1] * 20;
	var fy = 301 - (v3 * 20) / 2;;
	for (i = 0; i < v3; i++){
	if(!food.includes("v5" + fy, 0)){
	ctx.fillStyle = "DarkCyan"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("v5" + fy);
		left -= 1;
		}
	}
	fy = fy + 20;
}

	var fx = 381 - vx[1] * 20;
	var fy = 301 - (v3 * 20) / 2;
	for (i = 0; i < v3; i++){
	if(!food.includes("v6" + fy, 0)){
	ctx.fillStyle = "DarkCyan"
	ctx.fillRect(fx, fy, 18, 18);
	if(fx == px && fy == py){
		food.push("v6" + fy);
		left -= 1;
		}
	}
	fy = fy + 20;
}		
	
	
}
	}

	
	document.getElementById("food").innerHTML = left;
	//draw player/monster
	if(dead == false){
	ctx.fillStyle = "yellow";
	ctx.fillRect(px, py, 18, 18);
	}
	ctx.fillStyle = "red";
	ctx.fillRect(mx, my, 18, 18);
	
	
	if(lives == 3){
	document.getElementById("lifeleft").style.color = "green";
	document.getElementById("lifeleft").innerHTML = "3";
	}
	
	else if(lives == 2){
	document.getElementById("lifeleft").style.color = "yellow";
	document.getElementById("lifeleft").innerHTML = "2";
	}
	
	else if(lives == 1){
	document.getElementById("lifeleft").style.color = "red";
	document.getElementById("lifeleft").innerHTML = "1";
	}
	
	else if(lives == 0){
	lives = -1;
	gameover = true;
	finish = true;
	setTimeout(gameend, 1500);
	}
	
	if(left < 1){
	left = 1;
	finish = true;
	if(warp == true){
	warping = true;
	slow = 6;
	level = 4;
	speed = 200;
	}
	setTimeout(levelstart, 1000);
	}
	
	document.getElementById("levelnum").innerHTML = level;
	

}

function levelstart(){
	px = 21;
	py = 561;
	mx = 761;
	my = 21;
	h1 = (Math.floor(Math.random() * 8) + 4) * 2 ;
	v1 = (Math.floor(Math.random() * 8) + 4) * 2 ;
	h2 = (Math.floor(Math.random() * 8) + 4) * 2 ;
	v2 = (Math.floor(Math.random() * 8) + 4) * 2 ;
	h3 = (Math.floor(Math.random() * 8) + 4) * 2 ;
	v3 = (Math.floor(Math.random() * 8) + 4) * 2 ;
	hy.push(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))
	vx.push(Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10))
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
	warping = false;
}

function levelcycle(){
	h1 = (Math.floor(Math.random() * 8) + 4) * 2 ;
	v1 = (Math.floor(Math.random() * 8) + 4) * 2 ;
	left = h1 * 2 + v1 * 2;
}


function newlife(){
	if (gameover == false){
	px = 21;
	py = 561;
	mx = 761;
	my = 21;
	dir = 0;
	lives--;
	dead = false;
	}
}

function gameend(){
	speed = 500;
	hy = ["e"];
	vx = ["e"];
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