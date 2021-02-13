class Alien {
    constructor() {
        this.r = 100;
        this.x = this.r;
        this.y = height - this.r;
        this.vy = 0;
        this.gravity = 2.5;
    }

    jump() {
        if (this.y == height - this.r) {
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
        for (let j = 0; j < obsArr.length; j++) {
            obb.push(createVector(obsArr[j].x + obs.x, obsArr[j].y + obs.y));
        }
        let ans = collidePolyPoly(alb, obb);
        return ans;

    }

    move() {
        this.y += this.vy;
        this.vy += this.gravity;
        this.y = constrain(this.y, 0, height - this.r)
    }

    show() {
        image(alienImg, this.x, this.y, this.r * 1.65, this.r); // w/h ratio 1.65
    }
}

// let shape = createGraphics(this.r * 1.65, this.r);

        // shape.strokeWeight(5);
        // shape.fill(0);
        // // shape.beginShape();
        // shape.point(83, -3)
        // shape.point(109, 4)
        // shape.point(127, 19)
        // shape.point(133, 28)
        // shape.point(134, 44)
        // shape.point(152, 48)
        // shape.point(164, 57)
        // shape.point(167, 66)
        // shape.point(164, 73)
        // shape.point(157, 78)
        // shape.point(153, 86)
        // shape.point(145, 92)
        // shape.point(135, 94)
        // shape.point(121, 88)
        // shape.point(111, 89)
        // shape.point(100, 89)
        // shape.point(95, 96)
        // shape.point(82, 100)
        // shape.point(71, 98)
        // shape.point(65, 92)
        // shape.point(62, 89)
        // shape.point(45, 89)
        // shape.point(35, 96)
        // shape.point(17, 95)
        // shape.point(10, 82)
        // shape.point(-3, 73)
        // shape.point(-5, 65)
        // shape.point(-2, 59)
        // shape.point(9, 52)
        // shape.point(28, 41)
        // shape.point(34, 19)
        // shape.point(43, 9)
        // shape.point(52, 1)
        // shape.point(60, -3)

        // shape.strokeWeight(1);

        // shape.fill(0);
        // shape.beginShape();
        // shape.curveVertex(83, -3)
        // shape.curveVertex(109, 4)
        // shape.curveVertex(127, 19)
        // shape.curveVertex(133, 28)
        // shape.curveVertex(134, 44)
        // shape.curveVertex(152, 48)
        // shape.curveVertex(164, 57)
        // shape.curveVertex(167, 66)
        // shape.curveVertex(164, 73)
        // shape.curveVertex(157, 78)
        // shape.curveVertex(153, 86)
        // shape.curveVertex(145, 92)
        // shape.curveVertex(135, 94)
        // shape.curveVertex(121, 88)
        // shape.curveVertex(111, 89)
        // shape.curveVertex(100, 89)
        // shape.curveVertex(95, 96)
        // shape.curveVertex(82, 100)
        // shape.curveVertex(71, 98)
        // shape.curveVertex(65, 92)
        // shape.curveVertex(62, 89)
        // shape.curveVertex(45, 89)
        // shape.curveVertex(35, 96)
        // shape.curveVertex(17, 95)
        // shape.curveVertex(10, 82)
        // shape.curveVertex(-3, 73)
        // shape.curveVertex(-5, 65)
        // shape.curveVertex(-2, 59)
        // shape.curveVertex(9, 52)
        // shape.curveVertex(28, 41)
        // shape.curveVertex(34, 19)
        // shape.curveVertex(43, 9)
        // shape.curveVertex(52, 1)
        // shape.curveVertex(60, -3)

        // shape.endShape(CLOSE);


        // alienImg.mask(shape);
        // image(alienImg, this.x, this.y)