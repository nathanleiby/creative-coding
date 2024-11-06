function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("green");

  // draw an empty circle in the middle
  fill(255);
  square(200, 200, 100);

  // draw a circle at mouse location, with color deteremined by mouse pressed or not
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }

  circle(mouseX, mouseY, 100);
}
