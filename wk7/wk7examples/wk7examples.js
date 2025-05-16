//taken and tweaked from https://creative-coding.decontextualize.com/text-and-type/

let img1, img2, img3;
let showText = false;
let textToShow = "";

function preload() {
  img1 = loadImage('data/7eyewriter.jpg'); // replace with your actual image paths
  img2 = loadImage('data/7murdermachine.webp');
  img3 = loadImage('data/7sonifica.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  image(img1, 30, 50, 300, 200);
  image(img3, 30, 275, 300, 200);
  image(img2, 30, 500, 300, 200);

  if (textToShow !== "") {
    fill(2,50,150);
    textSize(32);
    textLeading(32);
    text(textToShow, mouseX+10, mouseY-10); 
  }
}

function mousePressed() {
  // img1
  if (mouseX > 30 && mouseX < 330 && mouseY > 50 && mouseY < 250) {
    textToShow = "Mechanised glasses that allow the wearer\n" +
                 "to write with their eyes. It uses eye-tracking\n" +
                 "software that parallels the position\n" +
                 "of one's pupils to that of a sequence\n" +
                 "of points on a screen.";
  }
  // img2
  else if (mouseX > 30 && mouseX < 330 && mouseY > 275 && mouseY < 475) {
    textToShow = "A sonic spectacle of prosthetic limbs.\n" +
                 "It turns the human body into an instrument\n" +
                 "by way of technology and music is made\n" +
                 "depending on the wearer's posture.";
  }
  // 3
  else if (mouseX > 30 && mouseX < 330 && mouseY > 500 && mouseY < 700) {
    textToShow = "An artwork in the form of a receipt printer,\n" +
                 "printing out fabricated murders. It simulates\n" +
                 "the frequency of Venezuela's death rate\n" +
                 "account of a murder occurring every 20 minutes.";
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
