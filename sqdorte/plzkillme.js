function setup() {
  createCanvas(window.innerWidth -4, window.innerHeight -4);

  console.log(width, height);

  j = []          // used points
  p = []          // initial points
  z = p           // p backup
  s = 10          // step

  noLoop()
  drawing = false
}

i = 0
function mousePressed() {
  if (i <= 2) {
    p[i] = createVector(mouseX, mouseY);
    i++
  } else {
    loop()
  }
}

function draw() {
  console.log('kek')
  a = p[0]
  b = p[1]

  q = b.x - a.x
  m = b.y - a.y

  r = Math.sqrt(q**2 + m**2)
  
  if (r >= 3) {
    x = (s*q)/r
    y = (s*m)/r

    p = [
      p[2],
      createVector(p[0].x + x, p[0].y + y),
      p[1]
    ]

    line(a.x, a.y, b.x, b.y)
  } else {
    i = 0
  }
}




