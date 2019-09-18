/*
Peter Chang
9-17-2019
Loading Screen
*/



var loadingtimer = 5;
var dotsCount = 0;
var dots;
var loadingtext;

function preload() {
 myFont = loadFont('../assets/Chango-Regular.ttf');
}


function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(220);
  textFont(myFont);
  textAlign(LEFT, CENTER);
  textSize(20);
  // line(76,0,76, height)
  text('Project 01', 76, 100);
  text('CSUEB FA2019', 76, 150);
  text('MM621: Screen Based Interaction', 76, 200);
  text('Instructor: Gwyan Rhabyt', 76, 250);
  textAlign(LEFT, CENTER);
  // line(450,0,450, height)
  textSize(20);
  // text();
  text(loadingtext, 450, 550);

  // dots = mult('.',dotsCount);
  // print(dots);
  // for (i=0, i<5, i++){
  //
  // }
  // while (timer > 0) {  // this doesn't work because it's all happening at the same time
  //   timer --;
  // }

  // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
  // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
  // this can be used to determine if the number on the left is divisible by the number on the right

  if (frameCount % 60 == 0 && dotsCount < 15) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    loadingtimer --;
    dotsCount ++;

  }
  if (dotsCount == 0 || dotsCount == 4) {
    // clear();
    loadingtext = 'Loading';
  }
  if (dotsCount == 1 || dotsCount == 5) {
    // clear();
    loadingtext = 'Loading.';
  }
  if (dotsCount == 2 || dotsCount == 6){
    loadingtext = 'Loading..'
  }
  if (dotsCount == 4 || dotsCount == 7){
    loadingtext = 'Loading...'
  }
  if (dotsCount == 5 || dotsCount == 7){
    loadingtext = 'Loading...'
  }
  if (dotsCount == 6 || dotsCount == 7){
    loadingtext = 'Loading...'
  }
  if (dotsCount == 7 || dotsCount == 7){
    loadingtext = 'Loading...'
  }
  // if (dotsCount == 4){
  //   loadingtext = 'Loading'
  // }
  // if (dotsCount == 5){
  //   loadingtext = 'Loading.'
  // }
  // if (dotsCount == 6){
  //   loadingtext = 'Loading..'
  // }
  // if (dotsCount == 7){
  //   loadingtext = 'Loading...'
  // }

}
