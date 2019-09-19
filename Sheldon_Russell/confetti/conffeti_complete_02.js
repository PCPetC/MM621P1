//Happy and Joyful Children by Free Music | https://soundcloud.com/fm_freemusic
//Music promoted by https://www.free-stock-music.com
//Creative Commons Attribution 3.0 Unported License
//https://creativecommons.org/licenses/by/3.0/deed.en_US

var intX;
var intY;

var xloc1;
var yloc1;
var xloc2;
var yloc2;
var xloc3;
var yloc3;
var xloc4;
var yloc4;
var xloc5;
var yloc5;
var xloc6;
var yloc6;
var xloc7;
var yloc7;
var xloc8;
var yloc8;

var introTime = 60 * 5;
var introExitTime = 60 * 15;
var introImg;
var instructImg;
let song;

function preload() {
   	introImg = loadImage('assets/bee.jpg');
    instructImg = loadImage('assets/baseball.png');
    song = loadSound('assets/song.mp3');
}

function setup() {
  // put setup code here
  createCanvas(600,600);
  background(70,165,211);
  noStroke();
  fill(255,0,0);
  rectMode(CENTER);
  imageMode(CENTER);
	image(introImg,300,300,600,600);
  song.loop();
}

function draw() {

  if (frameCount < introTime)  {
  	  return;
  } if (frameCount === introTime) {
    image(instructImg,300,300,600,600);
  }
  else if (frameCount === introExitTime) {
    background(70,165,211);
  }


  // check if xloc and yloc are defined before incrementing
  // they won't be defined until the mouse is clicked

  if (xloc1 && yloc1 && xloc1 < intX + 100 && (keyCode === 68 || keyCode === 87)) {
    //background(100);
    xloc1++;
    yloc1++;

    fill(random(255),random(255),random(255));
    rect(xloc1, yloc1, random(10,25), random(10,25));
  }

  if (xloc2 && yloc2 && xloc2 < intX + 100 && (keyCode === 68 || keyCode === 87)) {
    xloc2++;
    yloc2--;
    fill(random(255),random(255),random(255));
    rect(xloc2, yloc2, random(10,25), random(10,25));
  }

  if (xloc3 && yloc3 && xloc3 < intX + 100 && (keyCode === 68 || keyCode === 87)) {
    xloc3++;

    fill(random(255),random(255),random(255));
    rect(xloc3, yloc3, random(10,25), random(10,25));
  }

  if (xloc4 && yloc4 && yloc4 > intY - 100 && (keyCode === 68 || keyCode === 65 || keyCode === 87)) {
    yloc4--;

    fill(random(255),random(255),random(255));
    rect(xloc4, yloc4, random(10,25), random(10,25));
  }

  if (xloc5 && yloc5 && yloc5 < intY + 100 && (keyCode === 68 || keyCode === 65 || keyCode === 87)) {
    yloc5++;

    fill(random(255),random(255),random(255));
    rect(xloc5, yloc5, random(10,25), random(10,25));
  }

  if (xloc6 && yloc6 && xloc6 > intX - 100 && (keyCode === 65 || keyCode === 87)) {
    xloc6--;

    fill(random(255),random(255),random(255));
    rect(xloc6, yloc6, random(10,25), random(10,25));
  }

  if (xloc7 && yloc7 && yloc7 < intY + 100 && (keyCode === 65 || keyCode === 87)) {
    yloc7++;
    xloc7--;

    fill(random(255),random(255),random(255));
    rect(xloc7, yloc7, random(10,25), random(10,25));
  }

  if (xloc8 && yloc8 && yloc8 > intY - 100 && (keyCode === 65 || keyCode === 87)) {
    yloc8--;
    xloc8--;

    fill(random(255),random(255),random(255));
    rect(xloc8, yloc8, random(10,25), random(10,25));
  }

}

function mouseClicked() {
  xloc1 = intX = xloc2 = xloc3 = xloc4 = xloc5 = xloc6 = xloc7 = xloc8 = mouseX;
  yloc1 = intY = yloc2 = yloc3 = yloc4 = yloc5 = yloc6 = yloc7 = yloc8= mouseY;

  // prevent default
  return false;
}

function keyPressed() {
  var SPACEBAR = 32
  if (keyCode === SPACEBAR) {
   background(70,165,211);
  }
}

//Happy and Joyful Children by Free Music | https://soundcloud.com/fm_freemusic
//Music promoted by https://www.free-stock-music.com
//Creative Commons Attribution 3.0 Unported License
//https://creativecommons.org/licenses/by/3.0/deed.en_US
