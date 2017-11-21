function Pipe() {

  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
  this.speed = 5;
  this.hit = false;

  this.show = function() {
    fill(255);
    if (this.highlight) {
      fill(255,0,0);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
  }

  this.update = function(level) {
    this.speed = level * 2;
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }

  }

  this.hits = function(bird,score) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x+this.w) {
        this.highlight = true;
        if (!this.hit) {
          score.update(-100);
          this.hit = true;
          score.loselife();
        }

        return true;
      }
    }
    this.highlight = false;
    return false;

  }

}
