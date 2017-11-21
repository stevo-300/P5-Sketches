function Block(v,pieceID, size) {
 this.size = size;
 this.row;
 this.pieceID = pieceID;

 this.x = v.x;
 this.y = v.y;

 this.stopped = false;
 this.speed = 1;

 this.show = function(){
  fill(255);
  stroke(0);
  rect(this.x, this.y, this.size, this.size);
 }

 this.update = function() {


  if (this.y > (height - this.size)) {
  // this.y = height - this.size;
   this.speed = 0;
   if (this.stopped == false) {
     lines[(height-(this.y+this.size))/this.size] += 1;
     this.stopped = true;
     this.row = (height-(this.y+this.size))/this.size;
     piece.moving = false;
   }

  }
  for(var i=0;i< blocks.length;i++){
   if ((this.y+this.size) == blocks[i].y && this.x == blocks[i].x){ // && this.pieceID != blocks[i].pieceID && blocks[i].stopped) {

    //this.y = blocks[i].y - this.size;
    this.speed = 0;
    if (this.stopped == false) {
      lines[((height-(this.y+this.size))/this.size)] += 1;
      this.stopped = true;
      this.row = (height-(this.y+this.size))/this.size;
      piece.moving = false;
    }
   }
  }

  if (this.stopped == false) {
    if (piece.id == this.pieceID) {
      if (piece.moving) {
        this.y += 1*this.speed;
      } else {
        this.stopped = true;
      }
    }

  }
 }

 this.touching = function() {

 }

 this.move = function(num) {
   if (this.stopped == false) {
     this.x += num * this.size;
     if (this.x < 0) {
       this.x = 0;
     } else if (this.x > width-this.size) {
       this.x = width - this.size;
     }
   }

 }

}
