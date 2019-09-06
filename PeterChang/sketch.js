/*
Peter Chang
8-30-2019
MM6201-1X
Exercise 6: looping
*/

let mosdiv;
let mouseX,mouseY;
let x;
let y;

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);
  background(255);





}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function draw() {
    // clear();
    // background(255);
    // noCursor();
    // fill(0,200,0,255);
    // triangle(mouseX+30,mouseY-50,
    //           mouseX,mouseY+50,
    //           mouseX-30,mouseY-50);

    x = mouseX;
    y = mouseY;




 }



 function mousePressed(){

   rect(x,y,50,50);

   x = x-25;
   y = x-25;


   console.log(event);


    //  clear();
    //
    //  mosdiv = int(random(mouseX/100, mouseY/100))
    //  background(0);
    //  // noCursor();
    //  frameRate(15);
    //
    //  fill(0,255,255);
    //      for(var i=1; i<mosdiv; i++){
    //        for(var j=1; j<mosdiv; j++){
    //          textSize(random(72));
    //        text(int(random(20)),random(mouseX),random(mouseY));
    //      }}
    //
    // print(mosdiv);



 }
