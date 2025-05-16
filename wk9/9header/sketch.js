/*
----- Coding Tutorial by Patt Vira ----- 
Name: Text Rain (Drawing with Webcam
)
Video Tutorial: https://youtu.be/1GfKfjgf4cQ

Orginal Work by Camille Utterback & Romy Achituv (1999): http://camilleutterback.com/projects/text-rain/

Connect with Patt: @pattvira
https://www.pattvira.com/

and then tweaked by me!
----------------------------------------
*/

let thresholdVal = 0.30;

let t; let x, y;
let alphabets = ["NONHUMAN","DRAWING","MACHINE"];

let letters = [];
let num = 30;

let video;

function setup() {
  createCanvas(windowWidth, windowHeight);
  video = createCapture(VIDEO);
  video.size(width,height/3);
  video.hide();
  
  for (let i=0; i<num; i++) {
    let x = width/num * i;
    let y = 1;
    letters[i] = new Letter(x, y);
  }

}

function draw() {
  background(225);

  push();
  image(video, 0, 0, width, height/3);
  filter(THRESHOLD, thresholdVal);
  pop();

  image(video, 0, height / 3, width, height / 3);
  
  for (let i=0; i<num; i++) {
    letters[i].update();
    letters[i].display();
  }
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

