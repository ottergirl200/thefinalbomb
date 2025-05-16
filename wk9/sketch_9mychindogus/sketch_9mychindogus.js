let img1, img2, img3;

let angles = [0, 0, 0];
let orbitCenters = [];
let orbitRadii = [100, 200, 300]; 

let selectedIndex = -1; // no image selected, default
let imagePositions = []; 
let texts = ["weather glasses", "utensil holder", "reading finger"];

function preload() {
  img1 = loadImage('data/chind2.jpg');
  img2 = loadImage('data/chind1.jpg');
  img3 = loadImage('data/chind3.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  let center = createVector(width / 2, height / 2);
  orbitCenters = [center, center, center];
  imagePositions = [createVector(), createVector(), createVector()];
}

function draw() {
  background(255);

  let imgs = [img1, img2, img3];

  for (let i = 0; i < imgs.length; i++) {
    let center = orbitCenters[i];
    let radius = orbitRadii[i];

    // position in orbit
    let x = center.x + cos(angles[i]) * radius;
    let y = center.y + sin(angles[i]) * radius;
    
    //click
    imagePositions[i].set(x, y);

    // distance from mouse to image
    let d = dist(mouseX, mouseY, x, y);

    // distance to velocity (closer = faster)
    let speed = map(d, 0, width / 2, 0.1, 0.005);
    speed = constrain(speed, 0.005, 0.1);

    angles[i] += speed;

    image(imgs[i], x, y, 300, 200); 
  }
  
   // text 
  if (selectedIndex !== -1) {
    fill(0);
    textSize(32);
    textAlign(CENTER);
    text(texts[selectedIndex], width / 2, height - 50);
  }
}

function mousePressed() {
  //if mouse is over image
  for (let i = 0; i < imagePositions.length; i++) {
    let imgX = imagePositions[i].x;
    let imgY = imagePositions[i].y;
    let w = 300;
    let h = 200;

    if (mouseX > imgX - w / 2 && mouseX < imgX + w / 2 &&
        mouseY > imgY - h / 2 && mouseY < imgY + h / 2) {
      selectedIndex = i;
      return;
    }
  }
  selectedIndex = -1;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  let center = createVector(width / 2, height / 2);
  orbitCenters = [center, center, center];
}
