
function redhitbox(){
	if(redhit != 0){
		
		ctx.fillStyle = "darkred";
		if(redhit == 4){
			
			if(redcrouch == true){
				if(redhitframe < 4){ctx.fillRect(redx + 150, redy + 250, 50, 50); if(bluex > redx && bluex < redx + 200 && bluey > redy - 50 && bluey < redy + 300){bluehealth -= 5; bluehitstun = 10;}}
				else if(redhitframe < 8){ctx.fillRect(redx + 150, redy + 250, 75, 50); if(bluex > redx && bluex < redx + 225 && bluey > redy - 50&& bluey < redy + 300){bluehealth -= 3; bluehitstun = 10;}}
				else if(redhitframe < 12){ctx.fillRect(redx + 150, redy + 250, 100, 50); if(bluex > redx && bluex < redx + 250 && bluey > redy - 50 && bluey < redy + 300){bluehitstun = 20; bluehealth -= 7; bluemoveY = -150; bluejumpcount = 2; bluemoving = true; bluemoveX = 5; blueonground = false; bluelowjump = false; hit(196.0);}}
				else if(redhitframe < 16){ctx.fillRect(redx + 150, redy + 250, 75, 50); }
				else if(redhitframe < 20){ctx.fillRect(redx + 150, redy + 250, 50, 50); }	
				if(redhitframe == 20){redcrouch = false;}
			}
			
			else if(redonground == false && bluey < redy){
				if(redhitframe < 4){ctx.fillRect(redx + 150, redy, 50, 50); if(bluex > redx && bluex < redx + 200 && bluecrouch == false && bluey != 600){bluehealth -= 5; bluehitstun = 10;}}
				else if(redhitframe < 8){ctx.fillRect(redx + 150, redy, 90, 50); if(bluex > redx && bluex < redx + 240 && bluecrouch == false && bluey != 600){bluehealth -= 3; bluehitstun = 10;}}
				else if(redhitframe < 12){ctx.fillRect(redx + 150, redy, 130, 50); if(bluex > redx && bluex < redx + 280 && bluecrouch == false && bluey != 600){bluehealth -= 10; bluemoveY = -1000; hit(220.0);}}
				else if(redhitframe < 16){ctx.fillRect(redx + 150, redy, 75, 50); }
				else if(redhitframe < 20){ctx.fillRect(redx + 150, redy, 50, 50); }	
			}
			
			else if(redonground == false && bluey >= redy){
				if(redhitframe < 4){ctx.fillRect(redx + 150, redy + 250, 50, 50); if(bluex > redx && bluex < redx + 200 && bluecrouch == false && bluey < redy + 400){bluehealth -= 5; bluehitstun = 10;}}
				else if(redhitframe < 8){ctx.fillRect(redx + 150, redy + 250, 90, 50); if(bluex > redx && bluex < redx + 240 && bluecrouch == false && bluey < redy + 400){bluehealth -= 3; bluehitstun = 10;}}
				else if(redhitframe < 12){ctx.fillRect(redx + 150, redy + 250, 130, 50); if(bluex > redx && bluex < redx + 280 && bluecrouch == false && bluey < redy + 400){blueonground = false; bluehealth -= 7; bluemoveY = 1000; hit(146.8);}}
				else if(redhitframe < 16){ctx.fillRect(redx + 150, redy + 250, 75, 50); }
				else if(redhitframe < 20){ctx.fillRect(redx + 150, redy + 250, 50, 50); }	
			}
			
			else{
				if(redhitframe < 4){ctx.fillRect(redx + 150, redy + 100, 50, 50); if(bluex > redx && bluex < redx + 200 && bluecrouch == false && bluey > redy - 150 && bluey < redy + 150){bluehealth -= 5; bluehitstun = 10;}}
				else if(redhitframe < 8){ctx.fillRect(redx + 150, redy + 100, 90, 50); if(bluex > redx && bluex < redx + 240 && bluecrouch == false && bluey > redy - 150 && bluey < redy + 150){bluehealth -= 3; bluehitstun = 10;}}
				else if(redhitframe < 12){ctx.fillRect(redx + 150, redy + 100, 130, 50); if(bluex > redx && bluex < redx + 280 && bluecrouch == false && bluey > redy - 150 && bluey < redy + 150){bluehealth -= 7; bluemoving = true; bluemoveX = -50; bluehitstun = 30; hit(164.8);}}
				else if(redhitframe < 16){ctx.fillRect(redx + 150, redy + 100, 75, 50); }
				else if(redhitframe < 20){ctx.fillRect(redx + 150, redy + 100, 50, 50); }
			}
			

		}
		
		if(redhit == 3){

			if(redcrouch == true){
				if(redhitframe < 4){ctx.fillRect(redx, redy + 250, -50, 50); if(bluex < redx && bluex > redx - 200 && bluey > redy - 50 && bluey < redy + 300){bluehealth -= 5; bluehitstun = 10;}}
				else if(redhitframe < 8){ctx.fillRect(redx, redy + 250, -75, 50); if(bluex < redx && bluex > redx - 225 && bluey > redy - 50&& bluey < redy + 300){bluehealth -= 3; bluehitstun = 10;}}
				else if(redhitframe < 12){ctx.fillRect(redx, redy + 250, -100, 50); if(bluex < redx && bluex > redx - 250 && bluey > redy - 50 && bluey < redy + 300){bluehitstun = 30; bluehealth -= 7; bluemoveY = -150; bluejumpcount = 2; bluemoving = true; bluemoveX = -5; blueonground = false; bluelowjump = false; hit(196.0);}}
				else if(redhitframe < 16){ctx.fillRect(redx, redy + 250, -75, 50); }
				else if(redhitframe < 20){ctx.fillRect(redx, redy + 250, -50, 50); }	
				if(redhitframe == 20){redcrouch = false;}
			}
			
			else if(redonground == false && bluey < redy){
				if(redhitframe < 4){ctx.fillRect(redx, redy, -50, 50); if(bluex < redx && bluex > redx - 200 && bluecrouch == false && bluey != 600){bluehealth -= 5; bluehitstun = 10;}}
				else if(redhitframe < 8){ctx.fillRect(redx, redy, -90, 50); if(bluex < redx && bluex > redx - 240 && bluecrouch == false && bluey != 600){bluehealth -= 3; bluehitstun = 10;}}
				else if(redhitframe < 12){ctx.fillRect(redx, redy, -130, 50); if(bluex < redx && bluex > redx - 280 && bluecrouch == false && bluey != 600){bluehealth -= 10; bluemoveY = -1000; hit(220.0);}}
				else if(redhitframe < 16){ctx.fillRect(redx, redy, -75, 50); }
				else if(redhitframe < 20){ctx.fillRect(redx, redy, -50, 50); }	
			}
			
				else if(redonground == false && bluey >= redy){
				if(redhitframe < 4){ctx.fillRect(redx, redy + 250, -50, 50); if(bluex < redx && bluex > redx - 200 && bluecrouch == false && bluey < redy + 400){bluehealth -= 5; bluehitstun = 10;}}
				else if(redhitframe < 8){ctx.fillRect(redx, redy + 250, -90, 50); if(bluex < redx && bluex > redx - 240 && bluecrouch == false && bluey < redy + 400){bluehealth -= 3; bluehitstun = 10;}}
				else if(redhitframe < 12){ctx.fillRect(redx, redy + 250, -130, 50); if(bluex < redx && bluex > redx - 280 && bluecrouch == false && bluey < redy + 400){blueonground = false; bluehealth -= 7; bluemoveY = 1000; hit(146.8);}}
				else if(redhitframe < 16){ctx.fillRect(redx, redy + 250, -75, 50); }
				else if(redhitframe < 20){ctx.fillRect(redx, redy + 250, -50, 50); }	
			}
			
			else{
				if(redhitframe < 4){ctx.fillRect(redx, redy + 100, -50, 50); if(bluex < redx && bluex > redx - 200 && bluecrouch == false && bluey > redy - 150 && bluey < redy + 150){bluehealth -= 5; bluehitstun = 10;}}
				else if(redhitframe < 8){ctx.fillRect(redx, redy + 100, -90, 50); if(bluex < redx && bluex > redx - 240 && bluecrouch == false && bluey > redy - 150 && bluey < redy + 150){bluehealth -= 3; bluehitstun = 10;}}
				else if(redhitframe < 12){ctx.fillRect(redx, redy + 100, -130, 50); if(bluex < redx && bluex > redx - 280 && bluecrouch == false && bluey > redy - 150 && bluey < redy + 150){bluehealth -= 7; bluemoving = true; bluemoveX = +50; hit(164.8);}}
				else if(redhitframe < 16){ctx.fillRect(redx, redy + 100, -75, 50); }
				else if(redhitframe < 20){ctx.fillRect(redx, redy + 100, -50, 50); }
			}
	
		}
		redhitframe++
		if(redhitframe > 20){redhit = 0; redhitframe = 0;}
		
	}	
}

function bluehitbox(){
	if(bluehit != 0){
		
		ctx.fillStyle = "darkblue";
		if(bluehit == 4){
			
			if(bluecrouch == true){
				if(bluehitframe < 4){ctx.fillRect(bluex + 150, bluey + 250, 50, 50); if(redx > bluex && redx < bluex + 200 && redy > bluey - 50 && redy < bluey + 300){redhealth -= 5; bluehitstun = 10;}}
				else if(bluehitframe < 8){ctx.fillRect(bluex + 150, bluey + 250, 75, 50); if(redx > bluex && redx < bluex + 225 && redy > bluey - 50&& redy < bluey + 300){redhealth -= 3; redhitstun = 10;}}
				else if(bluehitframe < 12){ctx.fillRect(bluex + 150, bluey + 250, 100, 50); if(redx > bluex && redx < bluex + 250 && redy > bluey - 50 && redy < bluey + 300){redhitstun = 20; redhealth -= 7; redmoveY = -150; redjumpcount = 2; redmoving = true; redmoveX = 5; redonground = false; redlowjump = false; hit(392.0);}}
				else if(bluehitframe < 16){ctx.fillRect(bluex + 150, bluey + 250, 75, 50); }
				else if(bluehitframe < 20){ctx.fillRect(bluex + 150, bluey + 250, 50, 50); }	
				if(bluehitframe == 20){bluecrouch = false;}
			}
			
			else if(blueonground == false && redy < bluey){
				if(bluehitframe < 4){ctx.fillRect(bluex + 150, bluey, 50, 50); if(redx > bluex && redx < bluex + 200 && redcrouch == false && redy != 600){redhealth -= 5; redhitstun = 10;}}
				else if(bluehitframe < 8){ctx.fillRect(bluex + 150, bluey, 90, 50); if(redx > bluex && redx < bluex + 240 && redcrouch == false && redy != 600){redhealth -= 3; redhitstun = 10;}}
				else if(bluehitframe < 12){ctx.fillRect(bluex + 150, bluey, 130, 50); if(redx > bluex && redx < bluex + 280 && redcrouch == false && redy != 600){redhealth -= 10; redmoveY = -1000; hit(440.0);}}
				else if(bluehitframe < 16){ctx.fillRect(bluex + 150, bluey, 75, 50); }
				else if(bluehitframe < 20){ctx.fillRect(bluex + 150, bluey, 50, 50); }	
			}
			
				else if(blueonground == false && redy >= bluey){
				if(bluehitframe < 4){ctx.fillRect(bluex + 150, bluey + 250, 50, 50); if(redx > bluex && redx < bluex + 200 && redcrouch == false && redy < bluey + 400){redhealth -= 5; redhitstun = 10;}}
				else if(bluehitframe < 8){ctx.fillRect(bluex + 150, bluey + 250, 90, 50); if(redx > bluex && redx < bluex + 240 && redcrouch == false && redy < bluey + 400){redhealth -= 3; redhitstun = 10;}}
				else if(bluehitframe < 12){ctx.fillRect(bluex + 150, bluey + 250, 130, 50); if(redx > bluex && redx < bluex + 280 && redcrouch == false && redy < bluey + 400){redonground = false; redhealth -= 7; redmoveY = 1000; hit(293.7);}}
				else if(bluehitframe < 16){ctx.fillRect(bluex + 150, bluey + 250, 75, 50); }
				else if(bluehitframe < 20){ctx.fillRect(bluex + 150, bluey + 250, 50, 50); }	
			}
			
			else{
				if(bluehitframe < 4){ctx.fillRect(bluex + 150, bluey + 100, 50, 50); if(redx > bluex && redx < bluex + 200 && redcrouch == false && redy > bluey - 150 && redy < bluey + 150){redhealth -= 5; redhitstun = 10;}}
				else if(bluehitframe < 8){ctx.fillRect(bluex + 150, bluey + 100, 90, 50); if(redx > bluex && redx < bluex + 240 && redcrouch == false && redy > bluey - 150 && redy < bluey + 150){redhealth -= 3; redhitstun = 10;}}
				else if(bluehitframe < 12){ctx.fillRect(bluex + 150, bluey + 100, 130, 50); if(redx > bluex && redx < bluex + 280 && redcrouch == false && redy > bluey - 150 && redy < bluey + 150){redhealth -= 7; redmoving = true; redmoveX = -50; hit(329.6);}}
				else if(bluehitframe < 16){ctx.fillRect(bluex + 150, bluey + 100, 75, 50); }
				else if(bluehitframe < 20){ctx.fillRect(bluex + 150, bluey + 100, 50, 50); }
			}
			

		}
		
		if(bluehit == 3){

			if(bluecrouch == true){
				if(bluehitframe < 4){ctx.fillRect(bluex, bluey + 250, -50, 50); if(redx < bluex && redx > bluex - 200 && redy > bluey - 50 && redy < bluey + 300){redhealth -= 5; bluehitstun = 10;}}
				else if(bluehitframe < 8){ctx.fillRect(bluex, bluey + 250, -75, 50); if(redx < bluex && redx > bluex - 225 && redy > bluey - 50&& redy < bluey + 300){redhealth -= 3; redhitstun = 10;}}
				else if(bluehitframe < 12){ctx.fillRect(bluex, bluey + 250, -100, 50); if(redx < bluex && redx > bluex - 250 && redy > bluey - 50 && redy < bluey + 300){redhitstun = 30; redhealth -= 7; redmoveY = -150; redjumpcount = 2; redmoving = true; redmoveX = -5; redonground = false; redlowjump = false; hit(392.0);}}
				else if(bluehitframe < 16){ctx.fillRect(bluex, bluey + 250, -75, 50); }
				else if(bluehitframe < 20){ctx.fillRect(bluex, bluey + 250, -50, 50); }	
				if(bluehitframe == 20){bluecrouch = false;}
			}
			
			else if(blueonground == false && redy < bluey){
				if(bluehitframe < 4){ctx.fillRect(bluex, bluey, -50, 50); if(redx < bluex && redx > bluex - 200 && redcrouch == false && redy != 600){redhealth -= 5; redhitstun = 10;}}
				else if(bluehitframe < 8){ctx.fillRect(bluex, bluey, -90, 50); if(redx < bluex && redx > bluex - 240 && redcrouch == false && redy != 600){redhealth -= 3; redhitstun = 10;}}
				else if(bluehitframe < 12){ctx.fillRect(bluex, bluey, -130, 50); if(redx < bluex && redx > bluex - 280 && redcrouch == false && redy != 600){redhealth -= 10; redmoveY = -1000; hit(440.0);}}
				else if(bluehitframe < 16){ctx.fillRect(bluex, bluey, -75, 50); }
				else if(bluehitframe < 20){ctx.fillRect(bluex, bluey, -50, 50); }	
			}
			
				else if(blueonground == false && redy >= bluey){
				if(bluehitframe < 4){ctx.fillRect(bluex, bluey + 250, -50, 50); if(redx < bluex && redx > bluex - 200 && redcrouch == false && redy < bluey + 400){redhealth -= 5; redhitstun = 10;}}
				else if(bluehitframe < 8){ctx.fillRect(bluex, bluey + 250, -90, 50); if(redx < bluex && redx > bluex - 240 && redcrouch == false && redy < bluey + 400){redhealth -= 3; redhitstun = 10;}}
				else if(bluehitframe < 12){ctx.fillRect(bluex, bluey + 250, -130, 50); if(redx < bluex && redx > bluex - 280 && redcrouch == false && redy < bluey + 400){redonground = false; redhealth -= 7; redmoveY = 1000; hit(293.7);}}
				else if(bluehitframe < 16){ctx.fillRect(bluex, bluey + 250, -75, 50); }
				else if(bluehitframe < 20){ctx.fillRect(bluex, bluey + 250, -50, 50); }	
			}
			
			else{
				if(bluehitframe < 4){ctx.fillRect(bluex, bluey + 100, -50, 50); if(redx < bluex && redx > bluex - 200 && redcrouch == false && redy > bluey - 150 && redy < bluey + 150){redhealth -= 5; redhitstun = 10;}}
				else if(bluehitframe < 8){ctx.fillRect(bluex, bluey + 100, -90, 50); if(redx < bluex && redx > bluex - 240 && redcrouch == false && redy > bluey - 150 && redy < bluey + 150){redhealth -= 3; redhitstun = 10;}}
				else if(bluehitframe < 12){ctx.fillRect(bluex, bluey + 100, -130, 50); if(redx < bluex && redx > bluex - 280 && redcrouch == false && redy > bluey - 150 && redy < bluey + 150){redhealth -= 7; redmoving = true; redmoveX = +50;  redhitstun = 30; hit(329.6);}}
				else if(bluehitframe < 16){ctx.fillRect(bluex, bluey + 100, -75, 50); }
				else if(bluehitframe < 20){ctx.fillRect(bluex, bluey + 100, -50, 50); }
			}
	
		}
		bluehitframe++
		if(bluehitframe > 20){bluehit = 0; bluehitframe = 0;}

	}	
}



function hit(f){
		var context = new AudioContext()
		var o = context.createOscillator()
		var g = context.createGain()
		var frequency = f
		o.frequency.value = frequency
		o.type = "sine"
		o.connect(g)
		g.connect(context.destination)
		o.start(0)
		setTimeout(stop(), 10)
				
		function stop(){
		g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
		}
		}