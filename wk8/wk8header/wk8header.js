/* 
Ellen Nickles (and then tweaked)
NYU ITP

Code References:
http://learningprocessing.com/examples/chp17/example-17-03-scrollingtext
https://editor.p5js.org/re7l/sketches/PrACvIRXd

https://p5js.org/reference/#/p5/loadStrings
https://p5js.org/reference/#/p5/join
https://p5js.org/reference/#/p5/textWidth
https://p5js.org/reference/#/p5/textAlign
*/

let rowHeight;
let totalRows = 8;

let xLeft;
let xRight;
let scrollRate = 0.08;
let names = "the nitty gritty of physical computing";

let col1, col2;

function setup() {
  createCanvas(windowWidth, 400);
  xLeft = 0;
  xRight = width;
  rowHeight = height / totalRows;
}


function draw() {
  background(255);
  noStroke();

  //rows
  for (let row = 0; row < totalRows; row++) {
    let y = row * rowHeight;

    let r = 0;
    let g = 255;
    let b = map(rowHeight / 2 * row, 0, height, 255, 0);
    let a = 230;
    col1 = color(r, g, b, a);
    col2 = color(g, r, b, a);
    // col2 = color(b, r, g, a);

    if (row % 2 == 0) fill(col1);
    else fill(col2);
    rect(0, y, width, rowHeight);
  }

  textSize(rowHeight);

  // get width of string in pixels
  let namesWidth = textWidth(names + " ");

  // Scroll Left
  textAlign(LEFT, BOTTOM);
  for (let x = xLeft; x < width; x += namesWidth) {

    fill(col2);
    for (let i = 1; i <= totalRows; i += 2) {
      text(names + " ", x, rowHeight * i);
    }
  }
  xLeft -= scrollRate;

  // Scroll Right
  textAlign(RIGHT, BOTTOM);
  for (let x = xRight; x > 0; x -= namesWidth) {
    
    fill(col1);
    for (let i = 2; i <= totalRows; i += 2) {
      text(names + " ", x, rowHeight * i);
    }
  }
  xRight += scrollRate;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
