function Pieces(size) {
  this.blockx = [];
  this.count = 0;
  this.moving = true;
  this.id = 0;
  this.size = size;

  this.createPiece = function() {
    this.id = floor(random(10000,99999));
    for (var i = 0; i < 4; i++){
      var v = createVector(floor(random(3,7))*this.size,floor(random(0,4))*this.size);
      var xunique = true;
      while (xunique) {
        if (this.blockx.indexOf(v) >= 0){
          v = createVector(floor(random(3,7))*this.size,floor(random(0,4))*this.size);
        } else {
          xunique = false;
        }
      }
      blocks.push(new Block(v, this.id, this.size));
      this.blockx.push(v);
    }


    // for (var i = 0; i < 4; i++){
    //   blocks.push(new Block(this.blockx));
    //   this.blockx.push(blocks[blocks.length-1].x);
    // }
    this.blockx = [];
    this.count++;
  }

  this.update = function() {
    for (var i = 0; i < blocks.length; i++){
      blocks[i].update();
    }
  }
}
