class Obstacle {
    constructor() {
        this.r = 100;
        this.x = width;
        this.y = height - this.r;
        this.arr = [];
    }

    move() {
        this.x -= 20;
    }

    show() {
        image(obsImg, this.x, this.y, this.r * 1.17, this.r); // w/h ratio 1.17
    }
}


        // let shape = createGraphics(this.r * 1.17, this.r);
        // shape.strokeWeight(5);
        // shape.fill(0);

        // this.arr[0]=createVector(-3.399993896484375, 53)
        // this.arr[1]= createVector(24.600006103515625 , 32)
        // this.arr[2]= createVector(36.600006103515625 , 28)
        // this.arr[3]= createVector(52.600006103515625 , 26)
        // this.arr[4]= createVector(60.600006103515625 , 21)
        // this.arr[5]= createVector(78.60000610351562 , 20)
        // this.arr[6]= createVector(88.60000610351562 , -3)
        // this.arr[7]= createVector(106.60000610351562 , -5)
        // this.arr[8]= createVector(100.60000610351562 , 27)
        // this.arr[9]= createVector(110.60000610351562 , 28)
        // this.arr[10]= createVector(114.60000610351562 , 44)
        // this.arr[11]= createVector(114.60000610351562 , 58)
        // this.arr[12]= createVector(112.60000610351562 , 65)
        // this.arr[13]= createVector(104.60000610351562 , 70)
        // this.arr[14]= createVector(110.60000610351562 , 84)
        // this.arr[15]= createVector(117.60000610351562 , 98)
        // this.arr[16]= createVector(98.60000610351562 , 99)
        // this.arr[17]= createVector(80.60000610351562 , 76)
        // this.arr[18]= createVector(75.60000610351562 , 80)
        // this.arr[19]= createVector(62.600006103515625 , 81)
        // this.arr[20]= createVector(50.600006103515625 , 82)
        // this.arr[21]= createVector(41.600006103515625 , 82)
        // this.arr[22]= createVector(26.600006103515625 , 78)
        // this.arr[23]= createVector(6.600006103515625 , 71)
        // this.arr[24]= createVector(-2.399993896484375 , 62)





        // shape.point(-3.399993896484375, 53)
        // shape.point(24.600006103515625, 32)
        // shape.point(36.600006103515625, 28)
        // shape.point(52.600006103515625, 26)
        // shape.point(60.600006103515625, 21)
        // shape.point(78.60000610351562, 20)
        // shape.point(88.60000610351562, -3)
        // shape.point(106.60000610351562, -5)
        // shape.point(100.60000610351562, 27)
        // shape.point(110.60000610351562, 28)
        // shape.point(114.60000610351562, 44)
        // shape.point(114.60000610351562, 58)
        // shape.point(112.60000610351562, 65)
        // shape.point(104.60000610351562, 70)
        // shape.point(110.60000610351562, 84)
        // shape.point(117.60000610351562, 98)
        // shape.point(98.60000610351562, 99)
        // shape.point(80.60000610351562, 76)
        // shape.point(75.60000610351562, 80)
        // shape.point(62.600006103515625, 81)
        // shape.point(50.600006103515625, 82)
        // shape.point(41.600006103515625, 82)
        // shape.point(26.600006103515625, 78)
        // shape.point(6.600006103515625, 71)
        // shape.point(-2.399993896484375, 62)

        // console.log(shape);

        // shape.strokeWeight(1);
        // shape.fill(0);
        // shape.beginShape();
        // shape.curveVertex(-3.399993896484375, 53)
        // shape.curveVertex(24.600006103515625, 32)
        // shape.curveVertex(36.600006103515625, 28)
        // shape.curveVertex(52.600006103515625, 26)
        // shape.curveVertex(60.600006103515625, 21)
        // shape.curveVertex(78.60000610351562, 20)
        // shape.curveVertex(88.60000610351562, -3)
        // shape.curveVertex(106.60000610351562, -5)
        // shape.curveVertex(100.60000610351562, 27)
        // shape.curveVertex(110.60000610351562, 28)
        // shape.curveVertex(114.60000610351562, 44)
        // shape.curveVertex(114.60000610351562, 58)
        // shape.curveVertex(112.60000610351562, 65)
        // shape.curveVertex(104.60000610351562, 70)
        // shape.curveVertex(110.60000610351562, 84)
        // shape.curveVertex(117.60000610351562, 98)
        // shape.curveVertex(98.60000610351562, 99)
        // shape.curveVertex(80.60000610351562, 76)
        // shape.curveVertex(75.60000610351562, 80)
        // shape.curveVertex(62.600006103515625, 81)
        // shape.curveVertex(50.600006103515625, 82)
        // shape.curveVertex(41.600006103515625, 82)
        // shape.curveVertex(26.600006103515625, 78)
        // shape.curveVertex(6.600006103515625, 71)
        // shape.curveVertex(-2.399993896484375, 62)
        // shape.endShape(CLOSE);


        // obsImg.mask(shape);
        // image(obsImg, this.x, this.y);