function setup() {
  createCanvas(window.innerWidth-4, window.innerHeight-4);

  l = 15;     // length
  s = 30;     // spacing
}

function draw() {
  background(0);
  strokeWeight(3);

  for (var i = 0; i <= width; i+= s) {
    for (var j = 0; j <= height; j += s) {
      stroke(
        constrain(i-width/4, 50, 150),
        constrain(j-height/4, 50, 150),
        constrain(i*j, 50, 150)
      );
      x = i - mouseX;
      y = j - mouseY;
      r = sqrt(x**2 + y**2);

      q = (x*l)/r
      p = (y*l)/r

      line(i, j, i+Math.floor(q), j+Math.floor(p));
    }
  }
}
