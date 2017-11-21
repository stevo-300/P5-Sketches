function Tree(pos, heightT) {
  this.pos = pos;
  this.heighty = heightT;
  this.branchPoint = [this.heighty / 2, (this.heighty / 3)*2, (this.heighty / 4)*3, (this.heighty / 5)*4,(this.heighty / 5)*3];
  this.branchLength = [this.heighty / 2,this.heighty / 3,this.heighty / 4,this.heighty / 5, (this.heighty / 5)*2];
  //this.branches = (this.height / 2)

  this.show = function() {
    push()
    translate(this.pos.x, this.pos.y);
    line(0, 0, 0, 0 - this.heighty);
    pop()
    for (var i = 0; i < this.branchPoint.length; i++) {
      push();
      translate(this.pos.x - (this.branchLength[i] /2), this.pos.y - this.branchPoint[i]);
      line(0, 0, 0 + this.branchLength[i], 0);
      pop();
    }


  }
}
