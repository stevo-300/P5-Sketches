// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

var font;
var font2;
var vehicles = [];

function preload() {
  font = loadFont('assets/fonts/AvenirNextLTPro-Demi.otf');
  font2 = loadFont('assets/fonts/ChopinScript.ttf');
}

function setup() {
  createCanvas(windowWidth, 300);

  // textFont(font);
  // textSize(192);
  // fill(255);
  // noStroke();
  // text('train', 100, 200);

  var points = font.textToPoints('Dreaming of Tech', 100, 200, 192);//, {
    //sampleFactor: 0.25
  //});

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
    // stroke(255);
    // strokeWeight(8);
    // point(pt.x, pt.y);
  }
}

function draw() {
  background(245);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
