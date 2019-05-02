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
var a2;


// food

function drawline(){
			{//h1
				var fx = 461 - (h1 * 20) / 2;
				var fy = 281 - hy[3] * 20;
				for (i = 0; i < h1; i++) {
					if (!food.includes("h1" + fx, 0)) {
						ctx.fillStyle = "blue"
						ctx.fillRect(fx, fy, 18, 18);
						if (fx == px && fy == py) {
							food.push("h1" + fx);
							left -= 1;
							if (frequency == 100) { frequency = 800; }
							else if (frequencyold == frequency) { frequency = frequency - 25; }
						}
						if (441 - ax[1] * 20 == fx && level > 4) { food.push("h1" + fx); left -= 1; }
						if (461 + ax[1] * 20 == fx && level > 4) { food.push("h1" + fx); left -= 1; }
						if (fx > 601 && fy < 181) { food.push("h1" + fx); left -= 1; }
					}
					fx = fx + 20;
				}

				var fx = 461 - (h1 * 20) / 2;
				var fy = 301 + hy[3] * 20;
				for (i = 0; i < h1; i++) {
					if (!food.includes("h2" + fx, 0)) {
						ctx.fillStyle = "blue"
						ctx.fillRect(fx, fy, 18, 18);
						if (fx == px && fy == py) {
							food.push("h2" + fx);
							left -= 1;
							if (frequency == 100) { frequency = 800; }
							else if (frequencyold == frequency) { frequency = frequency - 25; }
						}
						if (441 - ax[1] * 20 == fx && level > 4) { food.push("h2" + fx); left -= 1; }
						if (461 + ax[1] * 20 == fx && level > 4) { food.push("h2" + fx); left -= 1; }
					}
					fx = fx + 20;
				}
			}

			{//v1
				var fx = 461 + vx[3] * 20;
				var fy = 301 - (v1 * 20) / 2;;
				for (i = 0; i < v1; i++) {
					if (!food.includes("v1" + fy, 0)) {
						ctx.fillStyle = "DarkCyan"
						ctx.fillRect(fx, fy, 18, 18);
						if (fx == px && fy == py) {
							food.push("v1" + fy);
							left -= 1;
							if (frequency == 100) { frequency = 800; }
							else if (frequencyold == frequency) { frequency = frequency - 25; }
						}
						if (281 - ax[2] * 20 == fy && level > 5) { food.push("v1" + fy); left -= 1; }
						if (301 + ax[2] * 20 == fy && level > 5) { food.push("v1" + fy); left -= 1; }
						if (fy < 181 && fx > 601) { food.push("v1" + fy); left -= 1; }

					}
					fy = fy + 20;
				}

				var fx = 441 - vx[3] * 20;
				var fy = 301 - (v1 * 20) / 2;
				for (i = 0; i < v1; i++) {
					if (!food.includes("v2" + fy, 0)) {
						ctx.fillStyle = "DarkCyan"
						ctx.fillRect(fx, fy, 18, 18);
						if (fx == px && fy == py) {
							food.push("v2" + fy);
							left -= 1;
							if (frequency == 100) { frequency = 800; }
							else if (frequencyold == frequency) { frequency = frequency - 25; }
						}
						if (281 - ax[2] * 20 == fy && level > 5) { food.push("v2" + fy); left -= 1; }
						if (301 + ax[2] * 20 == fy && level > 5) { food.push("v2" + fy); left -= 1; }

					}
					fy = fy + 20;
				}
			}

			if (level > 1) {

				{//h2
					var fx = 461 - (h2 * 20) / 2;
					var fy = 281 - hy[2] * 20;
					for (i = 0; i < h2; i++) {
						if (!food.includes("h3" + fx, 0)) {
							ctx.fillStyle = "blue"
							ctx.fillRect(fx, fy, 18, 18);
							if (fx == px && fy == py) {
								food.push("h3" + fx);
								left -= 1;
								if (frequency == 100) { frequency = 800; }
								else if (frequencyold == frequency) { frequency = frequency - 25; }
							}
							if (441 - ax[1] * 20 == fx && level > 4) { food.push("h3" + fx); left -= 1; }
							if (461 + ax[1] * 20 == fx && level > 4) { food.push("h3" + fx); left -= 1; }
							if (fx > 601 && fy < 181) { food.push("h3" + fx); left -= 1; }
						}
						fx = fx + 20;
					}

					var fx = 461 - (h2 * 20) / 2;
					var fy = 301 + hy[2] * 20;
					for (i = 0; i < h2; i++) {
						if (!food.includes("h4" + fx, 0)) {
							ctx.fillStyle = "blue"
							ctx.fillRect(fx, fy, 18, 18);
							if (fx == px && fy == py) {
								food.push("h4" + fx);
								left -= 1;
								if (frequency == 100) { frequency = 800; }
								else if (frequencyold == frequency) { frequency = frequency - 25; }
							}
							if (441 - ax[1] * 20 == fx && level > 4) { food.push("h4" + fx); left -= 1; }
							if (461 + ax[1] * 20 == fx && level > 4) { food.push("h4" + fx); left -= 1; }
						}
						fx = fx + 20;
					}
				}

				{//v2
					var fx = 461 + vx[2] * 20;
					var fy = 301 - (v2 * 20) / 2;;
					for (i = 0; i < v2; i++) {
						if (!food.includes("v3" + fy, 0)) {
							ctx.fillStyle = "DarkCyan"
							ctx.fillRect(fx, fy, 18, 18);
							if (fx == px && fy == py) {
								food.push("v3" + fy);
								left -= 1;
								if (frequency == 100) { frequency = 800; }
								else if (frequencyold == frequency) { frequency = frequency - 25; }
							}

							if (281 - ax[2] * 20 == fy && level > 5) { food.push("v3" + fy); left -= 1; }
							if (301 + ax[2] * 20 == fy && level > 5) { food.push("v3" + fy); left -= 1; }
							if (fy < 181 && fx > 601) { food.push("v3" + fy); left -= 1; }
						}
						fy = fy + 20;
					}

					var fx = 441 - vx[2] * 20;
					var fy = 301 - (v2 * 20) / 2;
					for (i = 0; i < v2; i++) {
						if (!food.includes("v4" + fy, 0)) {
							ctx.fillStyle = "DarkCyan"
							ctx.fillRect(fx, fy, 18, 18);
							if (fx == px && fy == py) {
								food.push("v4" + fy);
								left -= 1;
								if (frequency == 100) { frequency = 800; }
								else if (frequencyold == frequency) { frequency = frequency - 25; }
							}
							if (281 - ax[2] * 20 == fy && level > 5) { food.push("v4" + fy); left -= 1; }
							if (301 + ax[2] * 20 == fy && level > 5) { food.push("v4" + fy); left -= 1; }
						}
						fy = fy + 20;
					}


				}
			}

			if (level > 3) {

				{//h3
					var fx = 461 - (h3 * 20) / 2;
					var fy = 281 - hy[1] * 20;
					for (i = 0; i < h3; i++) {
						if (!food.includes("h5" + fx, 0)) {
							ctx.fillStyle = "blue"
							ctx.fillRect(fx, fy, 18, 18);
							if (fx == px && fy == py) {
								food.push("h5" + fx);
								left -= 1;
								if (frequency == 100) { frequency = 800; }
								else if (frequencyold == frequency) { frequency = frequency - 25; }
							}
							if (441 - ax[1] * 20 == fx && level > 4) { food.push("h5" + fx); left -= 1; }
							if (461 + ax[1] * 20 == fx && level > 4) { food.push("h5" + fx); left -= 1; }
							if (fx > 601 && fy < 181) { food.push("h5" + fx); left -= 1; }
						}
						fx = fx + 20;
					}

					var fx = 461 - (h3 * 20) / 2;
					var fy = 301 + hy[1] * 20;
					for (i = 0; i < h3; i++) {
						if (!food.includes("h6" + fx, 0)) {
							ctx.fillStyle = "blue"
							ctx.fillRect(fx, fy, 18, 18);
							if (fx == px && fy == py) {
								food.push("h6" + fx);
								left -= 1;
								if (frequency == 100) { frequency = 800; }
								else if (frequencyold == frequency) { frequency = frequency - 25; }
							}
							if (441 - ax[1] * 20 == fx && level > 4) { food.push("h6" + fx); left -= 1; }
							if (461 + ax[1] * 20 == fx && level > 4) { food.push("h6" + fx); left -= 1; }
						}
						fx = fx + 20;
					}
				}

				{//v3
					var fx = 461 + vx[1] * 20;
					var fy = 301 - (v3 * 20) / 2;;
					for (i = 0; i < v3; i++) {
						if (!food.includes("v5" + fy, 0)) {
							ctx.fillStyle = "DarkCyan"
							ctx.fillRect(fx, fy, 18, 18);
							if (fx == px && fy == py) {
								food.push("v5" + fy);
								left -= 1;
								if (frequency == 100) { frequency = 800; }
								else if (frequencyold == frequency) { frequency = frequency - 25; }
							}
							if (281 - ax[2] * 20 == fy && level > 5) { food.push("v5" + fy); left -= 1; }
							if (301 + ax[2] * 20 == fy && level > 5) { food.push("v5" + fy); left -= 1; }
							if (fy < 181 && fx > 601) { food.push("v5" + fy); left -= 1; }
						}
						fy = fy + 20;
					}

					var fx = 441 - vx[1] * 20;
					var fy = 301 - (v3 * 20) / 2;
					for (i = 0; i < v3; i++) {
						if (!food.includes("v6" + fy, 0)) {
							ctx.fillStyle = "DarkCyan"
							ctx.fillRect(fx, fy, 18, 18);
							if (fx == px && fy == py) {
								food.push("v6" + fy);
								left -= 1;
								if (frequency == 100) { frequency = 800; }
								else if (frequencyold == frequency) { frequency = frequency - 25; }
							}
							if (281 - ax[2] * 20 == fy && level > 5) { food.push("v6" + fy); left -= 1; }
							if (301 + ax[2] * 20 == fy && level > 5) { food.push("v6" + fy); left -= 1; }
						}
						fy = fy + 20;
					}


				}
			}
			
			
			
			//white lines

			if (level > 4) {
				{//a1
					var fx = 461 + ax[1] * 20;
					var fy = 301 - (a1 * 20) / 2;
					for (i = 0; i < a1; i++) {
						
						if (fy > 321 | fy < 261) {
							if (!food.includes("a1" + fy, 0)) {
							ctx.fillStyle = "White"
							ctx.fillRect(fx, fy, 18, 18);
							if (fy < 181 && fx > 601) { food.push("a1" + fy);}
							if (px == fx && py == fy) {
								if (dir == 1) { px = px + 20; dir = 0; }
								if (dir == 2) { py = py + 20; dir = 0; }
								if (dir == 3) { px = px - 20; dir = 0; }
								if (dir == 4) { py = py - 20; dir = 0; }
							}
							if (mx == fx && my == fy) {
								if(mdir == 2 || mdir == 3 || mdir == 4){
									mx-=20;
								}
								if(mdir == 6 || mdir == 7 || mdir == 8){
									mx+=20;
								}
								if(mdir == 1){
									my+=20;
								}
								if(mdir == 5){
									my-=20;
								}

							}
						}
						}
						fy = fy + 20;
					}


					var fx = 441 - ax[1] * 20;
					var fy = 301 - (a1 * 20) / 2;
					for (i = 0; i < a1; i++) {
						if (fy > 321 | fy < 261) {
							ctx.fillStyle = "White"
							ctx.fillRect(fx, fy, 18, 18);
							if (px == fx && py == fy) {
								if (dir == 1) { px = px + 20; dir = 0; }
								if (dir == 2) { py = py + 20; dir = 0; }
								if (dir == 3) { px = px - 20; dir = 0; }
								if (dir == 4) { py = py - 20; dir = 0; }
							}
							if (mx == fx && my == fy) {
								if(mdir == 2 || mdir == 3 || mdir == 4){
									mx-=20;
								}
								if(mdir == 6 || mdir == 7 || mdir == 8){
									mx+=20;
								}
								if(mdir == 1){
									my+=20;
								}
								if(mdir == 5){
									my-=20;
								}
							}
						}
						fy = fy + 20;
					}


				}
			}

			if (level > 5) {
				{//a2
					var fx = 461 - (a2 * 20) / 2;
					var fy = 281 - ax[2] * 20;
					for (i = 0; i < a2; i++) {
						if (fx > 481 | fx < 421) {
							if (!food.includes("a2" + fy, 0)) {
							if (fx > 601 && fy < 181) { food.push("a2" + fx);}
							ctx.fillStyle = "white"
							ctx.fillRect(fx, fy, 18, 18);
							if (fx == px && fy == py) {
								if (dir == 1) { px = px + 20; dir = 0; }
								if (dir == 2) { py = py + 20; dir = 0; }
								if (dir == 3) { px = px - 20; dir = 0; }
								if (dir == 4) { py = py - 20; dir = 0; }
							}

							if (mx == fx && my == fy) {
								if(mdir == 8 || mdir == 1 || mdir == 2){
									my+=20;
								}
								if(mdir == 4 || mdir == 5 || mdir == 6){
									my-=20;
								}
								if(mdir == 7){
									mx+=20;
								}
								if(mdir == 3){
									mx-=20;
								}
							}
							}
						}

						fx = fx + 20;
					}

					var fx = 461 - (a2 * 20) / 2;
					var fy = 301 + ax[2] * 20;
					for (i = 0; i < a2; i++) {
						if (fx > 481 | fx < 421) {
							ctx.fillStyle = "white"
							ctx.fillRect(fx, fy, 18, 18);
							if (fx == px && fy == py) {
								if (dir == 1) { px = px + 20; dir = 0; }
								if (dir == 2) { py = py + 20; dir = 0; }
								if (dir == 3) { px = px - 20; dir = 0; }
								if (dir == 4) { py = py - 20; dir = 0; }
							}

							if (mx == fx && my == fy) {
								if(mdir == 8 || mdir == 1 || mdir == 2){
									my+=20;
								}
								if(mdir == 4 || mdir == 5 || mdir == 6){
									my-=20;
								}
								if(mdir == 7){
									mx+=20;
								}
								if(mdir == 3){
									mx-=20;
								}
							}
						}

						fx = fx + 20;
					}
				}


			}
}