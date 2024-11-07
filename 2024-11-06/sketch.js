let handpose;
let predictions = [];
let img;
let video;

// happens before the main program starts
function preload() {
  img = loadImage("data/hand.jpg");
}
function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  handpose = ml5.handpose(video, modelReady);
  // frameRate(5); // don't need fast frame rate
}

function modelReady() {
  console.log("Model ready!");
  handpose.on("predict", (results) => {
    predictions = results;
  });
  handpose.predict(video);
}

function draw() {
  // background(20);
  // display the image
  // tint(255, 16);
  image(video, 0, 0, width, height);
  tint(255, 255);

  drawKeypoints();
}

// idea..
// hand to animal ?!
// detect the sign language and fetch an image from internet that matches?

function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const prediction = predictions[i];
    for (let j = 0; j < prediction.landmarks.length; j += 1) {
      const keypoint = prediction.landmarks[j];
      fill(0, 255, 0);
      noStroke();
      // tint(255, 128);
      ellipse(keypoint[0], keypoint[1], 10, 10);
      tint(255, 255);
    }
  }
}
