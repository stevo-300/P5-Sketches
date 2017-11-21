function Score() {
  this.score = 0;
  this.level = 1;

  this.update = function(num) {
    this.score += num;
    if (this.score % 10 == 0 && this.score > 0) {
      this.level++;
    }
  }

  this.show = function() {
    fill(160,240,140);
    var label = scalefactor/2;
    var data = scalefactor*1.25;
    textSize(label);
    text("Level",scalefactor/4,scalefactor/2);
    textSize(data);
    text(this.level,scalefactor,scalefactor*2.25);

    fill(160,240,140);
    textSize(label);
    text("Score",scalefactor*7.25,scalefactor/2);
    textSize(data);
    text(this.score,scalefactor*8,scalefactor*2.25);
  }
}
