function Score() {
  this.score = 0;
  this.lives = 3;
  this.endgame = false;
  this.levelup = false;

  this.show = function() {
    fill(255);
    text(this.score + " " + this.lives, 300, 20, width,height)
  }

  this.update = function(num) {
    this.score+=num;
    if (this.score < 0) {
      this.endgame = true;
    }
  }

  this.loselife = function() {
    this.lives -= 1;
    if (this.lives == 0) {
      this.endgame = true;
    }
  }
}
