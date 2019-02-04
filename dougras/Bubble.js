class Bubble {
  constructor(x, y) {
    let speed_offset = 2;
    this.diam = random(50);
    this.rad = this.diam / 2;
    this.pos = createVector(x, y);
    this.speed = createVector(random(-speed_offset, speed_offset), random(-speed_offset, speed_offset));
    this.color = color(0, 0, 0);
    this.is_overlap = false;
  }

  show() {
    stroke(this.color);
    strokeWeight(1);
    noFill();
    ellipse(this.pos.x, this.pos.y, this.diam, this.diam);
  }

  intersect(other) {
    return this.pos.dist(other.pos) <= this.rad + other.rad;
  }

  checkOverLap(bubbles) {
    bubbles.forEach(obj => this.is_overlap = (this !== obj && this.intersect(obj)) ? true : this.is_overlap);
    if (this.is_overlap) {
      this.color = color(0, 0, 0);
      this.is_overlap = false;
    }
    else this.color = color(0, 255, 0);
  }

  isOutScreen(width, height) {
    return (this.getX() <= -2 * this.rad || this.getX() > width + 2 * this.rad || this.getY() < -2 * this.rad || this.getY() > height + 2 * this.rad);
  }

  _isLimitScreen(direction) {
    return (direction == 'x') ? this.getX() <= this.rad || this.getX() >= width - this.rad : this.getY() <= this.rad || this.getY() > height - this.rad;
  }

  move() {
    if (this._isLimitScreen('x')) this.speed.x *= -1;
    if (this._isLimitScreen('y')) this.speed.y *= -1;
    this.pos.add(this.speed);
  }

  getX() {
    return this.pos.x;
  }

  getY() {
    return this.pos.y;
  }

  clicked(mouse_x, mouse_y) {
    if (dist(this.pos.x, this.pos.y, mouse_x, mouse_y) <= this.rad && mouseIsPressed) return true;
  }

}