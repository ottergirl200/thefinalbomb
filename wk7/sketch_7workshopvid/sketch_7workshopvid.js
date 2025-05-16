let vid;
let showVideo = false;
let x = 100;
let y = 100;
let offsetX, offsetY;
let dragging = false;
let button;

function preload() {
  vid = createVideo('data/7ard.mp4');
  vid.hide(); // Prevent default DOM showing
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create a button to show video
  button = createButton('click here to watch awesome video...drag it to see better');
  button.position(width/2, height/2);
  button.mousePressed(() => {
    showVideo = true;
    vid.loop(); // Start video playback
  });

  //vid.size(320, 180);
}

function draw() {
  background(255);

  if (showVideo) {
    image(vid, x, y);
  }
}

// Start dragging
function mousePressed() {
  if (
    showVideo &&
    mouseX > x && mouseX < x + vid.width &&
    mouseY > y && mouseY < y + vid.height
  ) {
    dragging = true;
    offsetX = mouseX - x;
    offsetY = mouseY - y;
  }
}

// Stop dragging
function mouseReleased() {
  dragging = false;
}

// Drag video
function mouseDragged() {
  if (dragging) {
    x = mouseX - offsetX;
    y = mouseY - offsetY;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
