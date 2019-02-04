let bg = {color: 30, color_min: 30, color_max: 200, fade: 0.25, flag: false, alpha: 50};
let bubbles;
let player;

function setup() {
  createCanvas(window.innerWidth - 4, window.innerHeight - 4);
  createFood();
  player = new Player(width, height);
}

function draw() {
  changeBackground();
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
  let num_bubbles = random(50, 200);
  bubbles = Array(Math.round(num_bubbles)).fill().map(() => new Bubble(random(0, width), random(0, height)));
}

function changeBackground() {
  background(bg.color, bg.alpha);
  if (bg.color <= bg.color_min) bg.flag = true;
  else if (bg.color >= bg.color_max) bg.flag = false;
  bg.color += (bg.flag) ? bg.fade : -bg.fade;
  console.log(bg.color);
}