var l;
var s;
var p;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  l = 15;     // length
  s = 30;     // spacing
  h = 100;    // brush size
  m = [];

  for (var i = 0; i <= width/s; i++) {
    k = []
    for (var j = 0; j <= height/s; j++) {
      k.push([0,0]);
    }
    m.push(k);
  }
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

      if (r <= h) {
        q = (x*l)/r
        p = (y*l)/r
        
        m[i/s][j/s] = [q,p]
      } else {
        t = m[i/s][j/s]
        q = t[0]
        p = t[1]
      }
      
      t = m[i/s][j/s]
      if (Math.random() < 0.1) {
        m[i/s][j/s] = [
          t[0] + Math.random < 0.5 ? 1 : -1 * Math.floor(Math.random()*2),
          t[1] + Math.random < 0.5 ? 1 : -1 * Math.floor(Math.random()*2)
        ]
      }

      line(i, j, i+Math.floor(q), j+Math.floor(p));
    }
  }
}
