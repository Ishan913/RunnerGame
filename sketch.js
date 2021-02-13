let alien;
let obs;
let backImg;
let alienImg;
let obsImg;
let obstacles = [];
let obsArr = [];
let alienArr=[];
let alb = [];


function preload() {
  backImg = loadImage('images/back.jpg');
  alienImg = loadImage('images/alien-8.png');
  obsImg = loadImage('images/obstacle-8.png')
}

function setup() {
  let canvas = createCanvas(1500, 700);
  alien = new Alien();
  obs = new Obstacle();
  obsArr[0] = createVector(-3.399993896484375, 53)
  obsArr[1] = createVector(24.600006103515625, 32)
  obsArr[2] = createVector(36.600006103515625, 28)
  obsArr[3] = createVector(52.600006103515625, 26)
  obsArr[4] = createVector(60.600006103515625, 21)
  obsArr[5] = createVector(78.60000610351562, 20)
  obsArr[6] = createVector(88.60000610351562, -3)
  obsArr[7] = createVector(106.60000610351562, -5)
  obsArr[8] = createVector(100.60000610351562, 27)
  obsArr[9] = createVector(110.60000610351562, 28)
  obsArr[10] = createVector(114.60000610351562, 44)
  obsArr[11] = createVector(114.60000610351562, 58)
  obsArr[12] = createVector(112.60000610351562, 65)
  obsArr[13] = createVector(104.60000610351562, 70)
  obsArr[14] = createVector(110.60000610351562, 84)
  obsArr[15] = createVector(117.60000610351562, 98)
  obsArr[16] = createVector(98.60000610351562, 99)
  obsArr[17] = createVector(80.60000610351562, 76)
  obsArr[18] = createVector(75.60000610351562, 80)
  obsArr[19] = createVector(62.600006103515625, 81)
  obsArr[20] = createVector(50.600006103515625, 82)
  obsArr[21] = createVector(41.600006103515625, 82)
  obsArr[22] = createVector(26.600006103515625, 78)
  obsArr[23] = createVector(6.600006103515625, 71)
  obsArr[24] = createVector(-2.399993896484375, 62)

  alienArr[0]=createVector(127 , 19)
  alienArr[1]=createVector(133 , 28)
  alienArr[2]=createVector(134 , 44)
  alienArr[3]=createVector(152 , 48)
  alienArr[4]=createVector(164 , 57)
  alienArr[5]=createVector(167 , 66)
  alienArr[6]=createVector(164 , 73)
  alienArr[7]=createVector(157 , 78)
  alienArr[8]=createVector(153 , 86)
  alienArr[9]= createVector(145 , 92)
  alienArr[10]=createVector(135 , 94)
  alienArr[11]=createVector(121 , 88)
  alienArr[12]=createVector(111 , 89)
  alienArr[13]=createVector(100 , 89)
  alienArr[14]=createVector(95 , 96)
  alienArr[15]=createVector(82 , 100)
  alienArr[16]=createVector(71 , 98)
  alienArr[17]=createVector(65 , 92)
  alienArr[18]=createVector(62 , 89)
  alienArr[19]=createVector(45 , 89)
  alienArr[20]=createVector(35 , 96)
  alienArr[21]=createVector(17 , 95)
  alienArr[22]=createVector(10 , 82)
  alienArr[23]=createVector(-3 , 73)
  alienArr[24]=createVector(-5 , 65)
  alienArr[25]=createVector(-2 , 59)
  alienArr[26]=createVector(9 , 52)
  alienArr[27]=createVector(28 , 41)
  alienArr[28]=createVector(34 , 19)
  alienArr[29]=createVector(43 , 9)
  alienArr[30]=createVector(52 , 1)
  alienArr[31]=createVector(60 , -3)

  

}

function keyPressed() {
  if (key == ' ') {
    alien.jump();

  }
}

function mousePressed() {
  // console.log("a+"+(mouseX-alien.x)+" "+"b+"+(mouseY-alien.y));
  // console.log("shape.point("+(mouseX-obs.x)+" , "+(mouseY-obs.y)+")")
}

function draw() {
  if (random(1) < 0.1) {
    if (obstacles.length == 0) {
      obstacles.push(new Obstacle());
    }
    else if (obstacles[obstacles.length - 1].x < 500) {
      obstacles.push(new Obstacle());
    }
  }
  background(backImg);
  for (let o of obstacles) {
    o.show();
    o.move();
    if (o.x<300){
      if (alien.hit(alienArr,obsArr,o)) {
        console.log("Game Over");
        noLoop();
    }
  }
  }
  // obs.show();
  alien.show();
  alien.move();
}
