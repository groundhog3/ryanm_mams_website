// Code referenced from Daniel Shiffman on http://natureofcode.com

let positionInit, position;
let start;
let angle = parseFloat(document.getElementById('angleSlider').value) * (Math.PI/180);
let velocityInitAbs = parseFloat(document.getElementById('velocitySlider').value);
let t = 0.0;
let ended = false;
let size = 28; 
let a = -9.8; //earth's gravity

let startButton = document.getElementById('startButton')
let stopButton = document.getElementById('stopButton')
let resetButton = document.getElementById('resetButton')

function setup() {
  let canvas = createCanvas(400, 300);
  canvas.parent("canvasDiv"); //loads canvas into a specificed div
  background(200);
  frameRate(75)
  noStroke();
  ellipseMode(CENTER);
  
  velocityInitAbs = parseFloat(document.getElementById('velocitySlider').value)
  angle = parseFloat(document.getElementById('angleSlider').value) * (Math.PI/180) //angle in radians
  particleHeight = parseFloat(document.getElementById('heightSlider').value)
  position = createVector(0,particleHeight);
  positionInit = createVector(0,particleHeight);
  
  console.log(velocityInitAbs, angle)
  
  velocityInit = createVector((Math.cos(angle)*velocityInitAbs), (Math.sin(angle)*velocityInitAbs));
  velocity = createVector(velocityInit.x, velocityInit.y)

  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse((size/2), (height-size/2 - particleHeight * 16), size, size);
  noLoop();
}

function draw() {
    start = performance.now()
    background(200);
    translate((size/2), (height-size/2));  //moves the origin to bottom left
    scale(1, -1);  //flips the y values so y increases "up"
    
    position.x = (velocityInit.x*t + positionInit.x)*10.0
    position.y = (0.5 * a *  Math.pow(t,2) + velocityInit.y*t + positionInit.y)*16.0

    velocity.x = velocityInit.x;
    velocity.y = velocityInit.y + a * t;

    document.getElementById('timeElem').innerHTML = t.toPrecision(3) + ' s';
    document.getElementById('velXElem').innerHTML = velocity.x.toPrecision(3) + ' m/s';
    document.getElementById('velYElem').innerHTML = velocity.y.toPrecision(3) + ' m/s';
    document.getElementById('posXElem').innerHTML = position.x.toPrecision(3) + ' m';
    document.getElementById('posYElem').innerHTML = (position.y-2).toPrecision(3) + ' m';
  
    if (velocity.y < 0 && position.y - 2 <= 0) { //check if ball touches ground
      // the subtraction by 2 is done because of the ellipse's line width
      t += parseFloat((performance.now() - start)/10)
      velocity.y = 0;
      //velocity.x = 0;
      ended = true
      console.log('Final Time', t)
      t = 0
      noLoop()
    }
   
    // Display circle at calclated position
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(position.x, position.y, size, size);
    t += parseFloat((performance.now() - start)/10); //keep adding time
  }

startButton.addEventListener("click", function() {
  loop();
  redraw();
  if (ended == false){
    start = performance.now()
  }
});

stopButton.addEventListener("click", function() {
    start = 0;
    noLoop();
});

resetButton.addEventListener("click", function() { 
  start = 0;
  document.getElementById('timeElem').innerHTML = '0.00 s';
  document.getElementById('velXElem').innerHTML = (Math.cos(angle)*velocityInitAbs).toPrecision(3) + ' m/s';
  document.getElementById('velYElem').innerHTML = (Math.sin(angle)*velocityInitAbs).toPrecision(3) + ' m/s';
  document.getElementById('posXElem').innerHTML = '0 m';
  document.getElementById('posYElem').innerHTML = particleHeight.toPrecision(3) + ' m';
  noLoop()
  ended = false
  setup()
});

//checks if spacebar is pressed to pause animation
function keyPressed(){
  if(key == ' '){
    start = 0;
    noLoop();
  }
}

//checks if spacebar is released to continue animation
function keyReleased() {
  if(key == ' '){
      loop();
    redraw();
    if (ended == false){
      start = performance.now()
    }
  }
}