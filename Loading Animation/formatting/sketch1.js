/*
Peter Chang
8-22-2019
MM6201-1X
Exercise 2: Variables
*/

var R1,R2,R3,R4,G1,G2,G3,G4,B1,B2,B3,B4;




function setup() {
  // put setup code here

  createCanvas(100,250);
  // background(100);

  var R1 = random(255);
  var R2 = random(255);
  var R3 = random(255);
  var R4 = random(255);
  var G1 = random(255);
  var G2 = random(255);
  var G3 = random(255);
  var G4 = random(255);
  var B1 = random(255);
  var B2 = random(255);
  var B3 = random(255);
  var B4 = random(255);

  //colors
  // fill(0,255,0,0);
  // stroke(10,5,20);

  //shapes
  // fill(random(255),random(255),random(255));
    fill(R1,B1,G1);
    ellipse(30,30,60,60);
    fill(R2,B2,G2);
    ellipse(30,90,60,60);
    fill(R3,B3,G3);
    ellipse(30,150,60,60);
    fill(R4,B4,G4);
    ellipse(30,210,60,60);

    // background(0);
    // stroke(153);
    // strokeWeight(4);
    // strokeCap(SQUARE);
    //
    // var a = 50;
    // var b = 120;
    // var c = 180;
    //
    // line(a, b, a + c, b);
    // line(a, b + 10, a + c, b + 10);
    // line(a, b + 20, a + c, b + 20);
    // line(a, b + 30, a + c, b + 30);
    //
    // a = a + c;
    // b = height - b;
    //
    // line(a, b, a + c, b);
    // line(a, b + 10, a + c, b + 10);
    // line(a, b + 20, a + c, b + 20);
    // line(a, b + 30, a + c, b + 30);
    //
    // a = a + c;
    // b = height - b;
    //
    // line(a, b, a + c, b);
    // line(a, b + 10, a + c, b + 10);
    // line(a, b + 20, a + c, b + 20);
    // line(a, b + 30, a + c, b + 30);



}

function draw() {
  // put drawing code here


  // randomColor = color(random(255),random(255),random(255));





}
