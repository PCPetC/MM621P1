
// Requirements

// On click there should be confetti explosion
// On swipe right: explosion to right
// On swipe left: explosion to left
// On two-finger tap: two explosions
// Explosion:
//   Confetti displayed in multiple directions from initial position
//   Will remain on screen after moving 200 units
// Confetti: Square, random size and color
//   Size: 25 to 50

// Notes
// Declaration: When you say => var xloc;
// Definition: When you assign a value to a variable => xloc = 5;
// Initialization: When you define a variable for the first time

// In JavaScript, if you declare a variable and don't define it,
// the value undefined is automatically assigned

var xloc; // xloc = undefined
var yloc;
var intX;
var intY;

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

var button;


function setup() {
  // put setup code here
  createCanvas(600,600);
  background(70,165,211);
  noStroke();
  fill(255,0,0);
  rectMode(CENTER);



}
function draw() {

  // check if xloc and yloc are defined before incrementing
  // they won't be defined until the mouse is clicked

  if (xloc && yloc && xloc < intX + 100 && (keyCode === RIGHT_ARROW || keyCode === UP_ARROW)) {
    //background(100);
    xloc++;
    yloc++;

    fill(random(255),random(255),random(255));
    rect(xloc, yloc, random(10,25), random(10,25));
  }

    if (xloc2 && yloc2 && xloc2 < intX + 100 && (keyCode === RIGHT_ARROW || keyCode === UP_ARROW)) {
    xloc2++;
    yloc2--;
    fill(random(255),random(255),random(255));
    rect(xloc2, yloc2, random(10,25), random(10,25));
  }

    if (xloc3 && yloc3 && xloc3 < intX + 100 && (keyCode === RIGHT_ARROW || keyCode === UP_ARROW)) {
    xloc3++;

    fill(random(255),random(255),random(255));
    rect(xloc3, yloc3, random(10,25), random(10,25));
  }

    if (xloc4 && yloc4 && yloc4 > intY - 100 && (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW || keyCode === UP_ARROW)) {
    yloc4--;

    fill(random(255),random(255),random(255));
    rect(xloc4, yloc4, random(10,25), random(10,25));
  }

    if (xloc5 && yloc5 && yloc5 < intY + 100 && (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW || keyCode === UP_ARROW)) {
    yloc5++;

    fill(random(255),random(255),random(255));
    rect(xloc5, yloc5, random(10,25), random(10,25));
  }

    if (xloc6 && yloc6 && xloc6 > intX - 100 && (keyCode === LEFT_ARROW || keyCode === UP_ARROW)) {
    xloc6--;

    fill(random(255),random(255),random(255));
    rect(xloc6, yloc6, random(10,25), random(10,25));
  }

    if (xloc7 && yloc7 && yloc7 < intY + 100 && (keyCode === LEFT_ARROW || keyCode === UP_ARROW)) {
    yloc7++;
    xloc7--;

    fill(random(255),random(255),random(255));
    rect(xloc7, yloc7, random(10,25), random(10,25));
  }

    if (xloc8 && yloc8 && yloc8 > intY - 100 && (keyCode === LEFT_ARROW || keyCode === UP_ARROW)) {
    yloc8--;
    xloc8--;

    fill(random(255),random(255),random(255));
    rect(xloc8, yloc8, random(10,25), random(10,25));
  }

}

function mouseClicked() {
  xloc = intX = xloc2 = xloc3 = xloc4 = xloc5 = xloc6 = xloc7 = xloc8 = mouseX;
  yloc = intY = yloc2 = yloc3 = yloc4 = yloc5 = yloc6 = yloc7 = yloc8= mouseY;

  // prevent default
  return false;
}



function keyPressed() {
  if (keyCode === SHIFT) {
   background(70,165,211);
  }


}
