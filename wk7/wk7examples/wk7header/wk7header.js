/**
Simple typewriter effect
Pippin Barr
and tweaked 
*/
//let myFont;
let string = `
PHYSICAL COMPUTING PHYSICAL COMPUTING PHYSICAL COMPUTING
a PHYSICAL CoMPUTINGGGer?? COMPUTERING THE PHYSiCAL?? 
wait PHYSICAl COMPUTer? waitttttt computers are physical
no, PHYSICAL COMPUTING! PHYSICAL COMPUTING !!!! ING ING
PHYSICALly COMPUTIngg PHYSICALLY PHYSICALLY COMPUTE!!`; 
// Which character in the string are we up to on the typewriter
let currentCharacter = 0;
// Page margins for a sheet of paper effect

//function preload () {
//  myFont = loadFont('AlteHaasGroteskBold.ttf');
//}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

/**
Draws a sheet of paper and the current amount of the string that's being typed
*/
function draw() {
  background(255,255,255);
  
  // Work out the current string we're writing (the substring of the full string that the typewriter has written so far)
  // The substring() method will return all the characters of a string
  // between the starting and ending positions (starts at 0)
  let currentString = string.substring(0, currentCharacter);
  
  //push();
  //fill(255);
  //noStroke();
  //rect(pageMargin, pageMargin, width - pageMargin*2, height - pageMargin);
  //pop();
  
  // Draw the current string on the page, with some margins
  push();
  fill(2,50,150);
  textSize(50);
  textFont('Courier');
  textAlign(LEFT, TOP);
  text(currentString, 0, 0, width, height);
  pop();
  
  // Increase the current character so that we get a longer and
  // longer substring above. Using fractional numbers allows us to
  // slow down the pace.
  currentCharacter += random(0,0.8); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
