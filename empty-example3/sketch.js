/*
Peter Chang
8-30-2019
MM6201-1X
Exercise 6: looping
*/

let y,x,mosdivx, mosdivy;
let mouseX, mouseY;
let mousediv;
let m;




function setup() {
  // put setup code here





  createCanvas(windowWidth, windowHeight);

  // print(windowWidth,windowHeight);


  // text(nfc(mouseX,2), 10, 10);

  // let mousediv = mouseX;
  for (let i = 0; i < 20; i++) {
    // let r = random(-50, 50);
    textSize(random(10,72));
    let rngnum = round(random(0,20));
    text(rngnum, random(windowWidth),random(windowHeight));
   }


}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

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

   // supposed to be mouse dependent
   // let mosdivx = 400 / 20;
   // let mosdivy = 400 / 20;
   //
   // let jump = 20;
   //
   // //grid
   // for (let y = 0; y < mosdivx; y++) {
   // for (let x = 0; x < mosdivy; x++) {
   //
   //   text(x * jump+10, y * jump+10, 8);
   //
   // }

   //generates a bunch of numbers
   // for (let i = 0; i < 20; i++) {
   //   // let r = random(-50, 50);
   //   text(random(0,9), random(2000),random(2000));
   //  }
   let mX = nfc(mouseX,2);
   let m = map(mX, 0, width, 0, 175);
   text(nfc(mX.toString(),2), 100, 100);

 }

  // print(mosdivx,mosdivy);
  // print(mouseX, mouseY);
