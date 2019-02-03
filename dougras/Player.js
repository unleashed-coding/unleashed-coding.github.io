class Player {
    constructor(x, y) {
        this.pos = createVector(x / 2, y / 2);
        this.color = color(random(255), random(255), random(255), 20);
        this.diam = 25;
        this.rad = this.diam / 2;
        this.alpha = 100;
        this.max_diam = 20000;
        this.inc_size = 0.5;
        this.qnt_green = 1;
    }

    show() {
        stroke(200, 200, 200);
        fill(this.color, this.alpha);
        ellipse(this.pos.x, this.pos.y, this.diam, this.diam);
    }

    move(mouse_x, mouse_y) {
        this.pos = createVector(mouse_x, mouse_y);
    }

    eat(food) {
        if (this.intersect(food) && food.color._getGreen() == 255) {
            if (this.diam <= this.max_diam) {
                let inc = noise(random(this.max_diam));
                this.diam += inc;
                this.qnt_green += inc;
            }
            this.rad = Math.ceil(this.diam) / 2;
            this.changeColor();
            return true;
        }
    }

    intersect(other) {
        return this.pos.dist(other.pos) <= this.rad + other.rad;
      }

    changeColor() {
        this.color = color(0, this.qnt_green, 0, this.alpha);
    }

    info() {
        console.log("x: " + this.pos.x + " y: " + this.pos.y + " diameter: " + this.diam);
    }
}