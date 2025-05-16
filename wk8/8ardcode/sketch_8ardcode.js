let string = `
Coding may also play a part in how a device works by providing instructions to corresponding hardware.
In an Arduino sketch, the setup function is where variables, pins, and any libraries used in the sketch are initialised.
On the otherhand, the loop function is where commands will repeat until the board is turned off.`;
let currentCharacter = 0;
let backpic;

function preload() {
  backpic = loadImage('data/ardsketch.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  textFont('Courier');
  textAlign(LEFT, TOP);
  fill(208, 14, 114);
}


function draw() {
  background(backpic)
  
   let currentString = string.substring(0, currentCharacter);
   text(currentString, mouseX, mouseY, width/2, height/2);
}

function keyPressed() {
  //currentCharacter += random(0,0.8); 
   
  currentCharacter += floor(random(1, 5));
  // Clamp to string length
  currentCharacter = min(currentCharacter, string.length);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
