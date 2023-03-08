/**
Name - VJ
Assignment 3 Challenge 1
A ball bouncing fronm left to right.
*/

let x;
let speedX;

function setup() {
  createCanvas(400, 400);

  x = 10;
  speedX = 2;
}

function draw() {
  background(220);

  x = x + speedX;
  drawSprite(x, height / 4);

  // This conditional ensures the ball bounces off the canvas.
  if (x > 190 || x < 0) {
    speedX = speedX * -1;
  }

  // console.log("The value of x is: " + x);
  // console.log("The value of speedX is : " + speedX);
}

function drawSprite(x, y) {
  push();
  translate(x, y);
  fill("red");
  ellipse(x, y, 50);
  pop();
}
