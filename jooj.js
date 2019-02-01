function setup() {
  createCanvas(screen.width, screen.height);
	background(255);
}

var a = 0;
var r = 50;
var m = Math.floor(Math.random()*800 + 250)
var i = -1;

function draw() {
	if (i <= m+1) {
		var x = r * cos(a);
		var y = r * sin(a);

		a += 0.1;
		r += 0.3;
		i += 1;
		
		if (i == 0 || i == m+2) {
			char = "j"
		} else {
			char = "o"
		}	
		
		push();
		translate(width / 2, height / 2);
		text(char, x,y)
		pop();
	}
}
