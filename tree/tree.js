function Tree(pos) {
  this.pos = pos;
  this.angle = radians(25);
  this.axiom = "F";
  this.sentence = this.axiom;
  this.len = 250;
  this.rules = [{
    a: "F",
    b: "FF+[+F-F-F]-[-F+F+F]"
  }];


  this.generate = function() {
    this.len *= 0.5;
    var nextSentence = "";
    for (var i = 0; i < this.sentence.length; i++) {
      var current = this.sentence.charAt(i);
      var found = false;
      for (var j = 0; j < this.rules.length; j++) {
        if (current == this.rules[j].a) {
          found = true;
          nextSentence += this.rules[j].b;
          break;
        }
      }
      if (!found) {
        nextSentence += current;
      }
    }
    this.sentence = nextSentence;
    //createP(sentence);
    //this.turtle();

  }

  this.turtle = function() {
    console.log(this.pos.x);
    //resetMatrix();
    push();
    translate(this.pos.x, this.pos.y);
    stroke(255, 100);
    for (var i = 0; i < this.sentence.length; i++) {
      var current = this.sentence.charAt(i);

      if (current == "F") {
        line(0, 0, 0, -this.len);
        translate(0, -this.len);
      } else if (current == "+") {
        rotate(this.angle);
      } else if (current == "-") {
        rotate(-this.angle)
      } else if (current == "[") {
        push();
      } else if (current == "]") {
        pop();
      }
    }
    pop();
  }

}
