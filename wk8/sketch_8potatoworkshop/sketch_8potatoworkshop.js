let potato;
let fries;
let baked;
let vid;

let showVideo = false;
let alphaVals = [0, 0, 0]; // Alpha values for each potato
let fadeSpeed = 5;

let potatoPositions = [];

function preload() {
  potato = loadImage('data/potato.png');
  fries = loadImage('data/fries.png');
  baked = loadImage('data/baked.png');
  vid = createVideo('data/8potato.mp4');
  vid.hide();
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Define potato positions
  let spacing = width / 4;
  potatoPositions = [
    createVector(spacing, height / 2),
    createVector(spacing * 2, height / 2),
    createVector(spacing * 3, height / 2)
  ];

  vid.size(200, 120);
}

function draw() {
  background(255);

  for (let i = 0; i < 3; i++) {
  let pos = potatoPositions[i];
  let potatoW = 100;
  let potatoH = 100;
  image(potato, pos.x - potatoW / 2, pos.y - potatoH / 2, potatoW, potatoH);

  if (alphaVals[i] > 0) {
    alphaVals[i] = min(255, alphaVals[i] + fadeSpeed);

    push();
    tint(255, alphaVals[i]); // Fade effect

    if (i === 0) {
      image(fries, pos.x - potatoW / 2, pos.y - potatoH / 2, potatoW*2, potatoH*2);
    } else if (i === 1) {
      image(baked, pos.x - potatoW / 2, pos.y - potatoH / 2, potatoW*2, potatoH*2);
    } else if (i === 2 && showVideo) {
      vid.size(potatoW*2, potatoH*2); // Resize video to match
      image(vid, pos.x - potatoW / 2, pos.y - potatoH / 2);
    }

    pop();
  }
}

}

function mousePressed() {
  for (let i = 0; i < 3; i++) {
    let pos = potatoPositions[i];
    let d = dist(mouseX, mouseY, pos.x, pos.y);
    if (d < 50) {
      alphaVals[i] = 1; // Start fade-in

      if (i === 2 && !showVideo) {
        showVideo = true;
        vid.play();
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
