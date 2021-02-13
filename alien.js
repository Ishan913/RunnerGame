class Alien {
    constructor() {
        this.r = 100;
        this.x = this.r;
        this.y = height - this.r-20;
        this.vy = 0;
        this.gravity = 2;
    }

    jump() {
        if (this.y == height - this.r-30) {
            this.vy = -35;
        }
    }

    hit(alien, obsArr, obs) {
        // let t = this.x, o = this.y, e = this.r * 1.65, i = this.r, r = obs.x, l = obs.y, n = obs.r * 1.17, c = obs.r;
        // return t + e >= r && t <= r + n && o + i >= l && o <= l + c;
        // return collideRectRect(this.x, this.y, this.r * 1.65, this.r,obs.x,obs.y,obs.r*1.17,obs.r);

        let alb = [];
        for (let j = 0; j < alien.length; j++) {
            alb.push(createVector(alien[j].x + this.x, alien[j].y + this.y));
        }
        let obb = [];
        for (let j = 0; j < obsArr.length; j++)
            obb.push(createVector(obsArr[j].x + obs.x, obsArr[j].y + obs.y));
        let ans = collidePolyPoly(alb, obb);
        return ans;
    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r-30)
    }

    show() {
        image(alienImg, this.x, this.y, this.r * 1.65, this.r); // w/h ratio 1.65
    }
}