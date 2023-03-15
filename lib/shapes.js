// This section is defined with a constructor that takes in the parameters inside the {}
// The Classes are subclasses of the shape class, that uses super to pass the arguments of the parent
// getSVG returns a string representing the shape with the given text and colors.
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
return `<rect width="150" height="150" fill="${this.shapeColor}" stroke="${this.textColor}" stroke-width="2"/>
      <text x="125" y="90" fill="${this.textColor}" font-size="60" text-anchor="middle">${this.text}</text>`;
    }
  }
  
  class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
  
    getSVG() {
return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" stroke="${this.textColor}" stroke-width="2"/>
      <text x="150" y="125" fill="${this.textColor}" font-size="60" text-anchor="middle">${this.text}</text>`;
    }
  }
  
  class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
      super(text, textColor, shapeColor);
    }
  
    getSVG() {
return `<polygon points="25,175 150,0 275,175" fill="${this.shapeColor}" stroke="${this.textColor}" stroke-width="2"/>
      <text x="150" y="120" fill="${this.textColor}" font-size="60" text-anchor="middle">${this.text}</text>`;
    }
  }
  
  module.exports = { Square, Circle, Triangle };