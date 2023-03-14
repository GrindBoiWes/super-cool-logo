class SVG {
    constructor(shape) {
      this.shape = shape;
    }
  
    generate() {
      return `<svg width="300" height="200">\n${this.shape.getSVG()}</svg>`;
    }
  }
  
  module.exports = { SVG };