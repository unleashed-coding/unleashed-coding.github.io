let bubbles;
let player;

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4);
  createFood();
  player = new Player(width, height);
}

function draw() {
  background(30, 50);
  player.move(mouseX, mouseY);
  player.show();

  for (let bubble of bubbles) {
    bubble.move(width, height);
    bubble.show();
    bubble.checkOverLap(bubbles);
    if (player.eat(bubble)) bubbles.splice(bubbles.indexOf(bubble), 1);
  }

  if(!bubbles.length) createFood();
}

function createFood() {
  let offset = 0;
  let num_bubbles = random(100, 300);
  bubbles = Array(Math.round(num_bubbles)).fill().map(() => new Bubble(random(offset, width - offset), random(offset, height - offset)));
}