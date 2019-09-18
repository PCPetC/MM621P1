
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


function setup() {
  // put setup code here
  createCanvas(600,600);
  background(100);
  noStroke();
  fill(255,0,0);
  rectMode(CENTER);
}
function draw() {

  // check if xloc and yloc are defined before incrementing
  // they won't be defined until the mouse is clicked

  if (xloc && yloc && xloc < intX + 70 ) {
    //background(100);
    xloc++;
    yloc++;

    fill(random(255),random(255),random(255));
    rect(xloc, yloc, random(10,25), random(10,25));
  }

    if (xloc2 && yloc2 && xloc2 < intX + 70 ) {
    xloc2++;
    yloc2--;
    fill(random(255),random(255),random(255));
    rect(xloc2, yloc2, random(10,25), random(10,25));
  }

    if (xloc3 && yloc3 && xloc3 < intX + 70 ) {
    xloc3++;

    fill(random(255),random(255),random(255));
    rect(xloc3, yloc3, random(10,25), random(10,25));
  }

    if (xloc4 && yloc4 && yloc4 > intY - 70 ) {
    yloc4--;

    fill(random(255),random(255),random(255));
    rect(xloc4, yloc4, random(10,25), random(10,25));
  }

    if (xloc5 && yloc5 && yloc5 < intY + 70 ) {
    yloc5++;

    fill(random(255),random(255),random(255));
    rect(xloc5, yloc5, random(10,25), random(10,25));
  }


}

function mouseClicked() {
  xloc = intX = xloc2 = xloc3 = xloc4 = xloc5 = mouseX;
  yloc = intY = yloc2 = yloc3 = yloc4 = yloc5 = mouseY;


  // prevent default
  return false;
}
