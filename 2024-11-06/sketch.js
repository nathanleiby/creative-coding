let handpose;
let predictions = [];
let img;

// happens before the main program starts
function preload() {
  img = loadImage("data/hand.jpg");
}
function setup() {
  createCanvas(400, 350);
  handpose = ml5.handpose(modelReady);
  frameRate(1); // don't need fast frame rate
}

function modelReady() {
  console.log("Model ready!");
  handpose.on("predict", (results) => {
    predictions = results;
  });
  handpose.predict(img);
}

function draw() {
  // display the image
  image(img, 0, 0, width, height);

  drawKeypoints();

  // don't call draw() again
  noLoop();
}

function drawKeypoints() {
  if (predictions.length > 0) {
    /* array for each prediction point
              indicies 0 - 4 : thumb
              indicies 5 - 8 : pointer
              indicies 9 - 12 : middle finger
              indicies 13 - 16 : ring finger
              indicies 17 - 20 : pinky
           */

    let p = predictions[0];
    let keypoints = p.landmarks;

    console.log(p);

    // draw an ellipse at each keypoint
    for (let kp of keypoints) {
      fill(0, 255, 0);
      noStroke();
      ellipse(kp[0], kp[1], 10, 10);
    }
  }
}
