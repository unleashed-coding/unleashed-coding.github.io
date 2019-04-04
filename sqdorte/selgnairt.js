function setup() {
  createCanvas(windowWidth, windowHeight);
  
  fill(0);
  frameRate(30);
  j = 0;

  s = Math.floor(Math.random()*100+20);     // spacing
}


function draw() {
  if (j <= height) {

    for (var i = 0; i <= width; i += s) {
      triangle(
        i,j,
        i+(Math.random() <= 0.5 ? 1 : -1)*s,
        j+(Math.random() <= 0.5 ? 1 : -1)*s,
        i+(Math.random() <= 0.5 ? 1 : -1)*s,
        j+(Math.random() <= 0.5 ? 1 : -1)*s
      )
    }

    if ( i >= width ) {
      j += s;
    }
  }
}
