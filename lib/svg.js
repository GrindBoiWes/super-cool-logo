class SVG {
    constructor(shape) {
      this.shape = shape;
    }
  
    generate() {
      return `<svg width="100" height="100">\n${this.shape.getSVG()}</svg>`;
    }
  }
  
  module.exports = { SVG };