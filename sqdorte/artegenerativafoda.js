function defaultArgs() {
  l = Math.floor(Math.random()*10+1)*10       // length
  c = createVector(
    l*Math.round((width/2)/l),
    l*Math.round((height/2)/l)
  );                                          // center
  q = createVector(+1, +1);                   // quadrant
  s = 5;                                      // step
  i = 0;                                      // index
  y = 1;                                      // current iteration
  z = Math.floor(Math.random()*80 + 30);      // max iterations
  stroke(Math.floor(Math.random()*150));      // line color
}

function setup() {
  createCanvas(window.innerWidth-4, window.innerHeight-4);
  defaultArgs();
  r = -100;
};

function draw() {
  if (y < z) {
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

      // restart
      i = 0;
      y++;

      // terminate if too close to the edge
      if (c.x -l < 0 || c.x +l > width || c.y -l < 0 || c.y +l > height) {
        y = z;
      }
    }
  } else {
    stroke(255);
    if (r >= width+100 && r >= height+100) {
      defaultArgs();
      r = -100;
    } else if (r >= 1) {
      ellipse(width/2, height/2, r, r);
      r *= 1.05;
    } else {
      r += 1;
    }
  }
}
