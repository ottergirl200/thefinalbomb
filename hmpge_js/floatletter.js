/*
----- Coding Tutorial by Patt Vira ----- 
Name: Interactive Floating Typography
Video Tutorial: https://youtu.be/-6v_AYyn49k

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/


let fonts = [];
let letters = [];

// function preload() {
//   fonts[0] = loadFont("square.ttf");
//   fonts[1] = loadFont("haasbold.ttf");
//   fonts[2] = loadFont("haasreg.ttf");
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  fonts[0] = 'Impact';
  fonts[1] = 'Courier New';
  fonts[2] = 'Impact';
  
}

function draw() {
  background(255,255,255);
  for (let i=letters.length-1; i >= 0; i--) {
    letters[i].update();
    letters[i].display();
    
    if (letters[i].offScreen() == true) {
      letters.splice(i, 1);
    }
  }

}

function mouseDragged() {
  letters.push(new Letter(mouseX, mouseY));
}

