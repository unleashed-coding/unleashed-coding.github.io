function setup() {
  createCanvas(screen.width-100, screen.height-150);

  c = createVector(width/2, height/2);    // center
  q = createVector(+1, +1);               // quadrant
  l = 100;                                // length
  s = 5;                                  // step
  i = 0;                                  // index
  y = 1;                                  // current iteration
  z = Math.floor(Math.random()*80 + 30);  // max iterations
}

function draw() {
  if (y <= z) {
    if (i <= l/s) {
      a = createVector(c.x + q.x * i*s, c.y);
      b = createVector(c.x, c.y - q.y * l + q.y * i*s);
      line(a.x, a.y, b.x, b.y);
      i++;
    } else {
      // select a new center point
        m = Math.random();
        n = m < 0.33 ? -1 : m < 0.66 ? 0 : 1
        m = Math.random();
        o = m < 0.33 ? -1 : m < 0.66 ? 0 : 1
        c = createVector(c.x + n * l, c.y + o*l)
      // select a new quadrant 
        q = createVector(
          Math.random() < 0.5 ? -1 : 1,
          Math.random() < 0.5 ? -1 : 1
        );

      i = 0;
      y++;
    }
  }
}
