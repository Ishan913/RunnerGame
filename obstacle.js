class Obstacle {
    constructor() {
        this.r = 100;
        this.x = width;
        this.y = height - this.r-30;
        this.arr = [];
    }

    move() {
        this.x -= 15;
    }

    show() {
        image(obsImg, this.x, this.y, this.r * 1.17, this.r); // w/h ratio 1.17
    }
}