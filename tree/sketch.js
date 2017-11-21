var t;

function setup() {
  createCanvas(windowWidth, windowHeight);
  var x = -75;
  t = new Tree(createVector(width/2,height-20))
  for(var i = 0;i < 5;i++){
    t.generate();
  }
}

function draw() {
  background(0);
  //for (var j = 0; j < t.length; j++){
    t.turtle();


  frameRate(0);

  //console.log(frameCount);
}
