function z(r) {
  bubbles = [];

  for (var x = 0; x <= Math.floor(Math.random()*100+50); x++) {
    theta = Math.random()*360;

    i = cos(theta)*r;
    j = sin(theta)*r;

    bubbles.push(createVector(i,j,Math.random()*30));
  }

  return bubbles;
}

function setup() { 
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(0);

  blebubs = [];
  m = null
}

function mousePressed() {
  m = createVector(mouseX, mouseY);
}

function mouseReleased() {
  c = createVector(m.x, m.y);
  r = dist(m.x, m.y, mouseX, mouseY);
  bubbles = z(r);
  blebubs.push([c, bubbles]);
  m = null
}

function draw() {
  background(66, 67, 68);

  if (m != null) {
    noFill();
    stroke(255);
    ellipse(m.x, m.y, dist(m.x, m.y, mouseX, mouseY)*2);
  }

  noStroke();

  blebubs.forEach(o => {
    c = o[0];
    bubbles = o[1];
    s = false;

    Array.from(bubbles.entries()).forEach(k => {
      index = k[0];
      bubble = k[1];

      fill(5500/bubble.z);

      ellipse(c.x+bubble.x, c.y+bubble.y, bubble.z);
      bubble.y -= 50/bubble.z

      if (c.y+bubble.y >= -bubble.z) {
        s = true
      }
    });

    if (!s) {
      bubbles = []
    }
  })
}
