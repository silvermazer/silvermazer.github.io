let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1300;
cnv.height = 1000;

var redhealth = 500;
var redmoving = false;
var redjumpcount = 0;
var redx = 100;
var redy = 600;
var redonground = true;
var redmoveY;
var redmoveX;
var redpress = 0;
var redcrouch = false;
var redhit = 0;
var redhitframe = 0;
var redhitstun = 0;
var redlowjump = false;
var redjumpdir = 0;

var bluehealth = 500;
var bluemoving = false;
var bluejumpcount = 0;
var bluex = 1050;
var bluey = 600;
var blueonground = true;
var bluemoveY;
var bluemoveX;
var bluepress = 0;
var bluecrouch = false;
var bluehitstun = 0;
var bluehit = 0;
var bluehitframe = 0;
var bluelowjump = false;
var bluejumpdir = 0;

var start = 300;
var end = false;
document.addEventListener("keydown", function () {

	if(redhitstun < 1 && redhitframe == 0){
	//---------------------RED-------------------//
		if(redpress < 5){
			if(event.key.toLowerCase() == "w"){
				if(redcrouch == true){redcrouch = false;}
				if(redjumpcount < 2){
					redonground = false;
					redmoveY = -100;
					console.log(redjumpdir);
					if (redjumpdir == 0) {
						redmoveX = -50;
					}
					else {
						redmoveX = 50;
					}
					redjumpcount++
				}	
			}

			if(event.key.toLowerCase() == "d"){
				redmoving = true;
				if(redonground == false){
					if(redmoveY < 0){redmoveX = 20;}
					else{redmoveX = 100;}
					}
				else if(redcrouch == true) {redmoveX = 15;}	
				else{redmoveX = 50;}
			}
			
			if(event.key.toLowerCase() == "a"){
				redmoving = true;
				if(redonground == false){
					if(redmoveY < 0){redmoveX = -20;}
					else{redmoveX = -100;}
				}
				else if(redcrouch == true) {redmoveX = -15;}	
				else{redmoveX = -50;}
			}	
			
			if(event.key.toLowerCase() == "s"){
				if(redonground == false){
					if(redmoveY < 0){redmoveY /= 5;}
					else{redmoveY *= 5;}
				}
				else{
					redcrouch = true;
				}
			}
		}
		if(event.key.toLowerCase() == "w"|| event.key.toLowerCase() == "a"||event.key.toLowerCase() == "s"||event.key.toLowerCase() == "d"){redpress++}

		if(event.key.toLowerCase() == "e"){redhit = 4; redjumpdir = 1;}//right hit
		else if(event.key.toLowerCase() == "q"){redhit = 3; redjumpdir = 0;}//left hit
		if(event.key.toLowerCase() == "w")  {redlowjump = false;}
		if(event.key.toLowerCase() == "s") {redlowjump = true;}
	}
	
	//---------------------------BLUE------------------------------//
	
		if(bluehitstun < 1 && bluehitframe == 0){
		if(bluepress < 5){
			if(event.key.toLowerCase() == "p"){
				if(bluecrouch == true){bluecrouch = false;}
				if(bluejumpcount < 2){
					blueonground = false;
					bluemoveY = -100;
					if (bluejumpdir == 0) {
						bluemoveX = -50;
					}
					else {
						bluemoveX = 50;
					}
					bluejumpcount++
				}	
			}

			if(event.key.toLowerCase() == "'"){
				bluemoving = true;
				if(blueonground == false){
					if(bluemoveY < 0){bluemoveX = 20;}
					else{bluemoveX = 100;}
					}
				else if(bluecrouch == true) {bluemoveX = 15;}		
				else{bluemoveX = 50;}
			}
			
			if(event.key.toLowerCase() == "l"){
				bluemoving = true;
				if(blueonground == false){
					if(bluemoveY < 0){bluemoveX = -20;}
					else{bluemoveX = -100;}
				}
				else if(bluecrouch == true) {bluemoveX = -15;}
				else{bluemoveX = -50;}
			}	
			
			if(event.key.toLowerCase() == ";"){
				if(blueonground == false){
					if(bluemoveY < 0){bluemoveY /= 5;}
					else{bluemoveY *= 5;}
				}
				else{
					bluecrouch = true;
				}
			}
		}
		if(event.key.toLowerCase() == "p"|| event.key.toLowerCase() == "l"||event.key.toLowerCase() == ";"||event.key.toLowerCase() == "'"){bluepress++}
		if(event.key.toLowerCase() == "["){bluehit = 4; bluejumpdir = 1;}//right hit
		else if(event.key.toLowerCase() == "o"){bluehit = 3; bluejumpdir = 0;}//left hit
		if(event.key.toLowerCase() == "p") {bluelowjump = false;}
		if(event.key.toLowerCase() == ";") {bluelowjump = true;}
		
		}
})



document.addEventListener("keyup", function(){// remove crouch and let button be pressed again after hold
	if(event.key.toLowerCase() == "w"|| event.key.toLowerCase() == "a"||event.key.toLowerCase() == "s"||event.key.toLowerCase() == "d"){redpress = 0;}
	if(event.key.toLowerCase() == "p"|| event.key.toLowerCase() == "l"||event.key.toLowerCase() == ";"||event.key.toLowerCase() == "'"){bluepress = 0;}
	if(event.key.toLowerCase() == "s" && redcrouch == true || event.key.toLowerCase() == "S" && redcrouch == true){if(redhit == 0){redcrouch = false;}}
	if(event.key.toLowerCase() == ";" && bluecrouch == true){if(bluehit == 0){bluecrouch = false;}}
	
	if(end == true && event.key.toLowerCase() == " "){window.history.back();}

})

requestAnimationFrame(loop)
ctx.font = "100px Arial";

function loop(){
	
	

	if(redy == bluey && redx < bluex + 150 && redx + 150 > bluex){
		if(bluex > redx){bluex += 0.5; redx -= 0.5;}
		else{bluex -= 0.5; redx += 0.5;}
	}
	
	
	bluehitstun--
	redhitstun--
	

	
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, cnv.width, cnv.height);
	
	ctx.fillStyle = "dimgrey";
	var i = 0;
	while(i < 31){
		ctx.fillRect (i * cnv.width / 30, 0, 3, 900)
		ctx.fillRect (0, i * cnv.height / 30, 1300, 3)
		i++
	}
	ctx.fillRect (15 * cnv.width / 30.1, 0, 9, 900)
	ctx.fillStyle = "grey";
	ctx.fillRect(0, 900, cnv.width, 100);



	
	//health drawing
	ctx.fillStyle = "darkgrey";
	ctx.fillRect(65, 20, 510, 50);
	ctx.fillRect(725, 20, 510, 50);
	
	ctx.fillStyle = "dimgrey";
	ctx.fillRect(730, 25, 500, 40);
	ctx.fillRect(70, 25, 500, 40);
	
	ctx.fillStyle = "aqua";
	ctx.fillRect(730, 25, bluehealth, 40);
	
	ctx.fillStyle = "tomato";
	ctx.fillRect(70 + Math.abs(redhealth - 500), 25, redhealth, 40);
	
	//red drawing
	ctx.fillStyle = "red";
	if(redcrouch == true){
		ctx.fillRect(redx, redy + 150, 150, 150);
	}
	else{
		ctx.fillRect(redx, redy, 150, 300);
	}
	
	//blue drawing
	ctx.fillStyle = "dodgerblue";
	if(bluecrouch == true){
		ctx.fillRect(bluex, bluey + 150, 150, 150);
	}
	else{
		ctx.fillRect(bluex, bluey, 150, 300);
	}
	
	
	if(start > 0){
		ctx.fillStyle = "white";
		if(Math.round(start/100) == 0){
		ctx.fillText("GO!", 560, 300)	
		}
		else{
		ctx.fillText(Math.round(start/100), 620, 300)
		}
		start--
	}
	else{

	
	//--------------------------RED----------------------------//

	if(redy > 600){redonground = true; redjumpcount = 0; redy = 600;}
	
	//movement
	if(redonground == false){
		if(redmoveY < -2){
			redy += redmoveY;
			if (redlowjump == true){
			redmoveY = 150;	
			}
			else{
			redmoveY /= 1.5;
			}
		}
		else{
			if(redmoveY < 0){redmoveY = 10;}
			redy += redmoveY;
			redmoveY *= 1.21;
	

		}
	
	}
	
	if(redx < 0){redx = 0;}
	if(redx > 1150){redx = 1150;}
	
	if(redmoving == true){
		redx += redmoveX;
		redmoveX /= 1.3;
	}
	

	
	//hitting
	redhitbox();
	
	//------------------------------BLUE------------------------------//

	if(bluey > 600){blueonground = true; bluejumpcount = 0; bluey = 600;}
	
	//movement
	if(blueonground == false){
		if(bluemoveY < -2){
			bluey += bluemoveY;
			if (bluelowjump == true){
			bluemoveY = 150;	
			}
			else{
			bluemoveY /= 1.5;
			}
		}
		else{
			if(bluemoveY < 0){bluemoveY = 10;}
			bluey += bluemoveY;
			bluemoveY *= 1.21;
	

		}
	
	}
	
	if(bluex < 0){bluex = 0;}
	if(bluex > 1150){bluex = 1150;}
	
	if(bluemoving == true){
		bluex += bluemoveX;
		bluemoveX /= 1.3;
	}
	
	//hitting
	bluehitbox();
}
	// Winner Message and End
	if(redhealth <= 0){redhealth = 0; ctx.fillStyle = "aqua"; ctx.fillText("Blue Wins", 400, 300); 
	ctx.fillStyle = "white";
	ctx.fillText("Space to Return to Menu", 100, 800);
	ctx.fillRect(70, 25, 500, 40);
	end = true;
	}
	else if(bluehealth <= 0){bluehealth = 0;  ctx.fillStyle = "tomato"; ctx.fillText("Red Wins", 420, 300);
	
	ctx.fillStyle = "white";
	ctx.fillText("Space to Return to Menu", 100, 800);
	ctx.fillRect(730, 25, 500, 40);
	end = true;
	
	}
	else{
	requestAnimationFrame(loop);
	}
}

