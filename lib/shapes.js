class Shape {
    constructor(text, textColor, shapeColor, fillColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor = shapeColor;
      this.fillColor = fillColor;
    }
  }
  
  class Square extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
  
    getSVG() {
      return `<rect width="50" height="50" fill="${this.shapeColor}" stroke="${this.textColor}" stroke-width="2"/>
              <text x="25" y="35" fill="${this.textColor}" font-size="24" text-anchor="middle">${this.text}</text>`;
    }
  }
  
  class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
  
    getSVG() {
      return `<circle cx="25" cy="25" r="25" fill="${this.shapeColor}" stroke="${this.textColor}" stroke-width="2"/>
              <text x="25" y="35" fill="${this.textColor}" font-size="24" text-anchor="middle">${this.text}</text>`;
    }
  }
  
  class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
  
    getSVG() {
      return `<polygon points="25,10 50,50 0,50" fill="${this.shapeColor}" stroke="${this.textColor}" stroke-width="2"/>
              <text x="25" y="35" fill="${this.textColor}" font-size="24" text-anchor="middle">${this.text}</text>`;
    }
  }
  
  module.exports = { Square, Circle, Triangle };