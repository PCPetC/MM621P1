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

var initialX;
var initialY;
var confettis = [];

function setup() {
  // put setup code here
  createCanvas(600, 600);
  background(100);
  noStroke();
  fill(255, 0, 0);
  rectMode(CENTER);
}

function draw() {
  // put drawing code here

  if (initialX && initialY) {
    //background(100);
    for (var i = 0; i < confettis.length; i++) {
      if (dist(initialX, initialY, confettis[i].x, confettis[i].y) < 200) {
        confettis[i].x += confettis[i].xSpeed;
        confettis[i].y += confettis[i].ySpeed;
        fill(confettis[i].color);
        rect(confettis[i].x, confettis[i].y, confettis[i].w, confettis[i].h);
      }
    }
  }

  // if (mouseX > pmouseX) {
  //   console.log("moving right")
  // }
}

function keyPressed() {
  initialX = mouseX;
  initialY = mouseY;

  for (var i = 0; i < 10; i++) {
    var xVel;
    if (keyCode === RIGHT_ARROW) {
      xVel = random(3);
    } else if (keyCode === LEFT_ARROW) {
      xVel = random(-3,0);
    } else {
      xVel = random(-3,3);
    }
    confettis.push({
      x: initialX,
      y: initialY,
      w: random(10,25),
      h: random(10,25),
      color: color(random(255),random(255),random(255)),
      xSpeed: xVel,
      ySpeed: random(-3,3),
    })
  }

  // prevent default
  return false;
}
