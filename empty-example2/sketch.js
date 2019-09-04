/*
Peter Chang
8-30-2019
MM6201-1X
Exercise 6: looping
*/

let y,x;
let num = 8;

function setup() {
  // put setup code here

  createCanvas(64, 64);

  // print(windowWidth,windowHeight);




}


// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//
// }

function draw() {
   // fill(255);
   // y = 0;
   // x = 0;
   // for (let i = 0; i < num / 1; i++) {
   //   circle(0, y, 8);
   //   for (let i = 0; i < num / 1; i++) {
   //     circle(x, 0, 8);
   //
   //
   //     x += 8;}
   //
   //   y += 8;
   // }

   let jump = 8;

   for (let y = 0; y < 8; y++) {
   for (let x = 0; x < 8; x++) {

     circle(x * jump + 4, y * jump + 4, 8);

   }
 }


}
