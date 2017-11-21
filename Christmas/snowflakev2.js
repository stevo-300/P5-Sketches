function Snowflakev2(pos, length) {
  this.pos = pos;
  this.length = length;
  this.hex = this.length * 0.2;
  this.flake = [];
  this.finished = false;
  this.rotateAngle = 0;
  this.branchPoint = [0.4, 0.6, 0.8];
  this.branchLength = [0.6, 0.4, 0.2];
  this.gravity = 0.1;
  this.speed = random(0.5,1);
  this.lifespan = 0;
  this.falldirection = random(-2,1)

  this.show = function() {
    if (this.length < 17) {
      push();
      fill(255,200);
      ellipse(this.pos.x, this.pos.y, this.length, this.length);
      pop();
    } else {
      push()
      translate(this.pos.x, this.pos.y)
      beginShape();
      for (var i = 0; i < 6; i++) {
        var angle = this.rotateAngle + map(i, 0, 6, 0, TWO_PI);
        vertex(this.hex * cos(angle), this.hex * sin(angle));

        line(0, 0, this.length * cos(angle), this.length * sin(angle));
        for (var j = 0; j < this.branchPoint.length; j++) {

          push();
          translate((this.length * this.branchPoint[j]) * cos(angle), (this.length * this.branchPoint[j]) * sin(angle));
          rotate(radians(50));
          line(0, 0, (this.length * this.branchLength[j]) * cos(angle), (this.length * this.branchLength[j]) * sin(angle));

          rotate(radians(-100));
          line(0, 0, (this.length * this.branchLength[j]) * cos(angle), (this.length * this.branchLength[j]) * sin(angle));

          pop();
        }

      }
      endShape(CLOSE);
      this.finished = true;
      pop();
    }
  } // show

  this.update = function() {
    if (this.lifespan % 2000 == 0 && this.lifespan > 0) {
      this.speed*=2;
    }

    this.pos.y += this.speed;
    this.pos.x += this.falldirection*this.gravity;

    this.lifespan++;
    //console.log(this.lifespan);

  }

  this.offscreen = function() {
    if (this.pos.y - (this.length / 2) > height) {
      return true;
    } else {
      return false;
    }
  }





}
