/*
Peter Chang
8-30-2019
MM6201-1X
Exercise 6: looping
*/


function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);

  let mX = mouseX/50;


  // for (let i = 0; i < 20; i++) {
  //
  //   textSize(random(10,72));
  //   let rngnum = round(random(0,20));
  //   text(rngnum, random(windowWidth),random(windowHeight));
  //  }


}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function draw() {
  // frameRate(0.01);
  // for (let i = 0; i < 20; i++) {
  //
  //   textSize(random(10,72));
  //   let rngnum = round(random(0,20));
  //   text(rngnum, random(windowWidth),random(windowHeight));
  //  }

 }

 function mousePressed(){

   clear();

   let c = random(round(mouseX/20),round(mouseY/20));
   for (let i = 0; i < c; i++) {

     textSize(random(10,72));
     let rngnum = round(random(0,20));
     text(rngnum, random(mouseX),random(mouseY));
    }

 }
