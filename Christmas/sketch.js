var bsnowflakes = [];
var watsons = [];
var watPic = [];
var fsnowflakes = [];
var backgroundTrees = [];
var backgroundTreesLocation = [];
var backgroundTreesSize = [];
var noOfTrees = 40;
var backgroundMusic;
var playMusic = true;
var fr;
var typeface;
var message = ['Merry Christmas','and a Happy New Year'];
var watsonsMessages = ['Merry Christmas', 'Merry Christmas', 'erry Mismas'];
var fAlpha = 0;
var startMessage = false;
var startFamilyPics = false;
var picSelected = -1;
var pixDensity;
var picAlpha;
var startImages = 500;
var textScale = 0.052687039;
var fontSize;
var merryLocation = [];

function preload() {
  backgroundMusic = loadSound('Assets/Sounds/carol-of-the-bells.mp3');
  for (var i = 0; i < noOfTrees; i++) {
    backgroundTrees.push(loadImage('Assets/Images/L-tree-1.png'));
  }
  typeface = loadFont('Assets/fonts/ChopinScript.ttf');
  watsons.push(loadImage('Assets/Images/watsons/1920x1080.png'));
  watsons.push(loadImage('Assets/Images/Watsons/600x600.png'));
  //watsons.push(loadImage('Assets/Images/Watsons/600x600.png'));
  //watsons.push(loadImage('Assets/Images/Watsons/600x600.png'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  stroke(255,50);
  noFill();
  fontSize = windowHeight*textScale;
  picAlpha = color(0,0,0,127);

  merryLocation.push(createVector(windowWidth*0.036458333,windowHeight*0.289778714));
  merryLocation.push(createVector(windowWidth*0.036458333,windowHeight*0.421496312));


  fr = createP('');
  for (var i = 0; i < noOfTrees; i++) {
    var r = random((height / 2) / backgroundTrees[i].height,(height / 4) / backgroundTrees[i].height);
    backgroundTreesSize.push(r);
    backgroundTreesLocation.push(createVector(random(width / 2, width - (width / 20)), height-(height / 17)-(backgroundTrees[i].height*r)));
  }

  var h = (height/7)-(height/14);
  for (var i = 0; i < 3; i++) {
    watPic.push(new FamPic(createVector(width/4,h),height/5,height/5,watsons[1],i,watsonsMessages[i]));
    h += (height/7)*2;
  }

}

function draw() {
  background(51);
  //Start Music
  if (playMusic) {
    if (!backgroundMusic.isPlaying() ) {
      backgroundMusic.play();
    }
  } else {
    backgroundMusic.stop();
  }

  //Background Snowflakes
  if (random(2) < 0.1) {
    bsnowflakes.push(new Snowflakev2(createVector(random(width), -20), random(20)));
  }

  for (var i = bsnowflakes.length - 1; i >= 0; i--) {
    bsnowflakes[i].show();
    bsnowflakes[i].update(2);
    if (bsnowflakes[i].offscreen()) {
      bsnowflakes.splice(i, 1);
    }
  }




  for (var i = 0; i < noOfTrees; i++) {
    image(backgroundTrees[i],backgroundTreesLocation[i].x,backgroundTreesLocation[i].y, backgroundTrees[i].width*backgroundTreesSize[i],backgroundTrees[i].height*backgroundTreesSize[i]);
  };

  //snow base
  push();
  fill(250);
  beginShape();
  curveVertex(width, height);
  curveVertex(0, height);
  curveVertex(0, height - (height / 40));
  curveVertex(width/3,height - (height / 20));
  curveVertex((width/3)*2,height - (height / 13));
  curveVertex(width, height - (height / 12));
  endShape(CLOSE);
  pop();

  push();
  fill(255);
  stroke(190);
  strokeWeight(0.5);
  beginShape();
  curveVertex((width/3)*2.5, height);
  curveVertex(0, height);
  curveVertex(0, height - (height / 9));
  curveVertex(width/3,height - (height / 18));
  curveVertex((width/3)*2,height - (height / 32));
  //curveVertex(((width/3)*2)+(width/25), height);
  endShape(CLOSE);
  pop();

  //Foreground Snowflakes
  if (random(2) < 0.1) {
    fsnowflakes.push(new Snowflakev2(createVector(random(width), -20), random(20)));
  }

  for (var i = fsnowflakes.length - 1; i >= 0; i--) {
    fsnowflakes[i].show();
    fsnowflakes[i].update();
    if (fsnowflakes[i].offscreen()) {
      fsnowflakes.splice(i, 1);
    }
  }

  if (frameCount % startImages == 0 && frameCount > 0 && frameCount < (startImages+1))  {
    startMessage = true;
  }
  if (startMessage) {
    if (fAlpha < 256) {
      fAlpha++;
    }
  } else {
    if (fAlpha > 0) {
      fAlpha--;
    }
  }
  if (fAlpha > 0) {
      push();
        translate(merryLocation[0].x,merryLocation[0].y);
        rotate(radians(-45));
        fill(255,0,0,fAlpha);
        stroke(255,255,255,fAlpha);
        textFont(typeface,fontSize);
        text(message[0],0,0);
      pop();

      push();
        translate(merryLocation[1].x,merryLocation[1].y);
        rotate(radians(-45));
        fill(255,0,0,fAlpha);
        stroke(255,255,255,fAlpha);
        textFont(typeface,fontSize);
        text(message[1],0,0);
      pop();
  }

  if (frameCount % (startImages+200) == 0 && frameCount > 0 && frameCount < (startImages+201)) {
    startFamilyPics = true;
  }

  if (startFamilyPics) {
    for (var i = 0;i<3;i++) {
      watPic[i].show(picSelected);
    }
  }



  // push();
  // stroke(0);
  // textSize(20);
  // text(frameRate(),20,height - 50);
  // pop();
}
function mousePressed() {
  for (var i = 0;i<3;i++) {
    watPic[i].clicks();
  }
  var test = 0
  for (var i = 0;i<3;i++) {
    if (watPic[i].clicked) {
      test++;
    }
  }
  if (test ==0) {
    picSelected = -1;
  }


}
