function Snowflake(pos, length,angle) {

  this.pos = pos;
  this.length = length;
  this.finished = false;
  this.weight = 0;
  this.flake = [];
  if (angle) {
    this.startingAngle = angle;
  } else {
    this.startingAngle = 0;
  }

  this.drawn = false;


  this.show = function() {
    for (var i = 0; i < 6; i++) {
      push();
      translate(this.pos.x,this.pos.y);
      rotate(radians(this.startingAngle));
      if (i % 2 == 0){
        line(0, 0-(this.length/2), 0, 0+(this.length/2));
      } else {
        line(0, 0-(this.length/2.5), 0, 0+(this.length/2.5));
      };


      pop();
      this.startingAngle+=30;
      if (i===5){
        this.startingAngle+=180;
      }
    }

    for (var i = 0; i < 6; i++) {
      push();
      translate(this.pos.x,this.pos.y-(this.length/8));
      rotate(radians(this.startingAngle));
      rotate(radians(60));
      line(0,0-(this.length/24),0,0);
      rotate(radians(-120));
      line(0,0-(this.length/24),0,0);
      rotate(radians(60));
      pop();
      this.startingAngle+=30;
      if (i===5){
        this.startingAngle+=180;
      }
    }



  }

  this.update = function() {
    this.pos.y += 3;
  }

  this.offscreen = function() {
    if (this.pos.y-(this.length/2) > height) {
      return true;
    } else {
      return false;
    }
  }





}
