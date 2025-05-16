class Letter {
    constructor(x, y) {
      this.alphabets = ["C","2","💣"];
      this.letter = random(this.alphabets);
      this.f = random(fonts);
      this.size = random(50, 100);
      
      this.x = x;
      this.y = y
      this.dx = random(-5, 5);
      this.dy = random(-5, 5);
      
      this.angle = random(360);
      this.angleV = random(1, 3);
    }
    
    update() {
      this.x += this.dx;
      this.y += this.dy;
      
      this.angle += this.angleV;
      
    }
    
    display() {
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      textFont(this.f);
      textSize(this.size);
      fill(191,30,46);
      text(this.letter, 0, 0);
      pop();
    }
    
    offScreen() {
      let margin = this.size * 2;
      if (this.x > width + margin  || this.x < 0 - margin || this.y > height + margin || this.y < 0 - margin) {
        return true;
      } else {
        return false;
      }
    }
  }