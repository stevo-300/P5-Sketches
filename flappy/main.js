var bird;
var pipes = [];
var score;
var level;

function setup() {
  createCanvas(400,600);
  bird = new Bird();
  score = new Score();
  level = 1;
}

function draw() {
  if (score.endgame) {
    frameRate(0);
    console.log("Game Over.... final score: " + score.score)
  }
  background(0);
  bird.update();
  bird.show();



  if (frameCount % 100  == 0) {
    pipes.push(new Pipe());
  }

  for (var i = pipes.length-1; i >= 0; i--){

    pipes[i].update(level);
    pipes[i].show();

    if (pipes[i].hits(bird,score)) {


    }

    if (pipes[i].offscreen()) {
      pipes.splice(i,1);
    }
  }


  if (frameCount % 10 == 0) {
    score.update(50);
  }
  score.show();

  //LEVEL UP
  if (score.score % 1000 == 0 && score.levelup === false && score.score > 0) {
    level++;
    console.log("level up");

    score.levelup = true;
  } else {
    if (score.score % 1000 == 0 && score.score > 0) {

    } else {
      score.levelup = false;
    }

  }
  text(level, 10, 10);
}

function keyPressed() {
  if (key === ' ') {
    bird.up();
  }
}
