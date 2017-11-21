function FamPic(pos, w, h, pic,id,message) {
  this.pos = pos;
  this.clicked = true;
  this.h = h;
  this.w = w;
  this.pic = pic;
  this.id = id;
  this.message = message;
  this.frameSize = w * 0.04;
  this.colourUp = true;
  this.frameColour = 255;

  this.show = function(picID){
    push();
    // if (this.id != picSelected && picSelected >= 0) {
    //
    // }
    if (this.id == picSelected && picSelected >= 0) {
      push();
      translate(windowWidth / 2,height / 4);
      fill(255,0,0);
      stroke(255,0,0);
      textSize(fontSize);
      text(this.message,0,0);
      pop();
      push();



      fill(this.frameColour,0,0);
      noStroke();
      translate(this.pos.x-this.frameSize,this.pos.y-this.frameSize);
      rect(0,0,this.w + (this.frameSize*2),this.h + (this.frameSize*2));
      pop();
    }
    image(this.pic,this.pos.x, this.pos.y, this.w, this.h);
    pop();

  }

  this.clicks = function() {
    if (mouseX > this.pos.x && mouseX < this.pos.x + this.w && mouseY > this.pos.y && mouseY < this.pos.y+this.h) {
      picSelected = this.id
      this.clicked = true;
    } else {
      this.clicked = false;
    }

  }

  // this.update = function(clicked){
  //   this.clicked = clicked;
  // }
}
