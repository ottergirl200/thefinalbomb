//original code taken from class then tweaked

//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}

//function setup() {
//  createCanvas(windowWidth, windowHeight); 
  
//  noStroke();
//  frameRate(15);
//  background(255);
//}

//function draw() {
//    fill(255, 220, 0, 20); 
//    rect(0, 0, width, height);
  
//   stroke(0);
//    strokeWeight(1);
//    line(mouseX,mouseY,width/2,height/2);
    
//    textSize(36);
//    text("randomness",mouseX,mouseY); 
//}

let img1, img2, img3;
let pos1, pos2, pos3;
let imgSize = 150;
let message = "hover over an img";
let textColor;

function preload() {
  img1 = loadImage('data/9reading.png');
  img2 = loadImage('data/9schultz.png');
  img3 = loadImage('data/9mono.jpg');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setPositions(); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  noStroke();
  background(255);

  setPositions();
}

function setPositions() {
  let centerY = height / 2;
  let spacing = imgSize + 40;
  let centerX = width / 2;

  pos1 = createVector(centerX - spacing, centerY);
  pos2 = createVector(centerX, centerY);
  pos3 = createVector(centerX + spacing, centerY);
}

function draw() {
  //background fade
  fill(255, 255, 255, 20);
  rect(0, 0, width, height);

  stroke(0);
  strokeWeight(1);
  line(mouseX, mouseY, width / 2, height / 2);

  noStroke();

  image(img1, pos1.x - imgSize / 2, pos1.y - imgSize / 2, imgSize, imgSize);
  image(img2, pos2.x - imgSize / 2, pos2.y - imgSize / 2, imgSize, imgSize);
  image(img3, pos3.x - imgSize / 2, pos3.y - imgSize / 2, imgSize, imgSize);

  // hover txt
  if (isMouseOver(pos1)) {
    message = "Tiger Dingsun's cool website";
    textColor = color(255, 205, 17); 
  } else if (isMouseOver(pos2)) {
    message = "Schultzschultz custom design tools";
    textColor = color(255, 205, 17); 
  } else if (isMouseOver(pos3)) {
    message = "Baku Hashimoto's MONO NO AWARE";
    textColor = color(255, 205, 17); 
  } else {
    message = "hover over an img";
    textColor = color(0); 
  }

  fill(textColor);
  textSize(32);
  textAlign(CENTER, CENTER);
  text(message, mouseX, mouseY);
}

function isMouseOver(pos) {
  return dist(mouseX, mouseY, pos.x, pos.y) < imgSize / 2;
}
