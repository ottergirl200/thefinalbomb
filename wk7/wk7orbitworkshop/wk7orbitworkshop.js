//taken from p5js website and tweaked with help from Chatgpt 

let img1, img2, img3, img4

function preload() {
  img1 = loadImage('data/7ardkit.jpg');
  img2= loadImage('data/7ardkit2.jpg');
  img3 = loadImage('data/lightbutton.jpg');
  img4 = loadImage('data/lightpotent.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
  gfxTop = createGraphics(360, 360);
  gfxTop.background(2,50,150);
  gfxTop.textAlign(CENTER, CENTER);
  gfxTop.textSize(32);
  gfxTop.fill(255);
  gfxTop.text("workshop stuff", 150, 150);

  gfxBottom = createGraphics(360, 360);
  gfxBottom.background(2,50,150);
  gfxBottom.textAlign(CENTER, CENTER);
  gfxBottom.textSize(32);
  gfxBottom.fill(255);
  gfxBottom.text("workshop stuff", 150, 150);
}

function draw() {
  background(2,50,150);
  // Enable orbiting with the mouse.
  orbitControl(3,3,0);
  
  noStroke();
  
  let boxSize = 360;

  push(); // Front face
  translate(0, 0, boxSize / 2);
  texture(img1);
  plane(boxSize, boxSize);
  pop();

  push(); // Back face
  translate(0, 0, -boxSize / 2);
  rotateY(PI);
  texture(img3);
  plane(boxSize, boxSize);
  pop();

  push(); // Left face
  translate(-boxSize / 2, 0, 0);
  rotateY(HALF_PI);
  texture(img2);
  plane(boxSize, boxSize);
  pop();

  push(); // Right face
  translate(boxSize / 2, 0, 0);
  rotateY(-HALF_PI);
  texture(img4);
  plane(boxSize, boxSize);
  pop();
  
  push();
  translate(0, -boxSize / 2, 0);
  rotateX(-HALF_PI);
  texture(gfxTop);
  plane(boxSize, boxSize);
  pop();

  // Bottom face (with text)
  push();
  translate(0, boxSize / 2, 0);
  rotateX(HALF_PI);
  texture(gfxBottom);
  plane(boxSize, boxSize);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
