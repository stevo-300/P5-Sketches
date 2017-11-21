var block;
var blocks = [];
var piece;
var lines = [];
var score;
var scalefactor = 30;

function setup() {
 createCanvas(10*scalefactor,24*scalefactor);
 for (var i = 0; i <20;i++){
   lines.push(0);
 }
 //block = new Block();
 piece = new Pieces(scalefactor);
 score = new Score();
 piece.createPiece();
}

function draw() {
 background(0);

 //draw frame
 fill(255,0,0);
 noStroke();
 rect(0,(4*scalefactor)-3,10*scalefactor,3);
 rect((3*scalefactor)-3,0,3,4*scalefactor);
 rect(7*scalefactor,0,3,4*scalefactor);
 score.show();


 // if (frameCount % 1000 == 0){
 //   piece.createPiece();
 // }

 for (var i = 0; i < blocks.length; i++){
   blocks[i].show();
 }

 if (piece.count == 1) {
   if (piece.moving) {
     piece.update();
   } else {
     piece = new Pieces(scalefactor);
     piece.createPiece();
   }

 } else {

 }

 for (var i = 0; i < lines.length; i++){
  if (lines[i] == 10) {
    score.update(1);
    for (var j = blocks.length-1; j >=0; j--){
      if (blocks[j].row == i){
        blocks.splice(j,1);
        lines[i] = 0;
      }
    }
  }
 }


}

function keyPressed(){
  if (keyCode == LEFT_ARROW) {
    for (var i = 0; i < blocks.length; i++){
      blocks[i].move(-1);
    }
  } else if (keyCode == RIGHT_ARROW) {
    for (var i = 0; i < blocks.length; i++){
      blocks[i].move(1);
    }
  }

}
