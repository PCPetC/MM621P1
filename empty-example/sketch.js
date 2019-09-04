/*
Peter Chang
8-30-2019
MM6201-1X
Exercise 6: looping
*/
let y;
let num = 8;

function setup() {
  // put setup code here

  createCanvas(600, 600);

  // print(windowWidth,windowHeight);




}


// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//
// }

function draw() {
   fill(255);
   y = 50;
   for (let i = 0; i < num / 1; i++) {
     circle(10, y, 10);
     y += 50;
   }






}
