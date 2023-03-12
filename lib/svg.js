class SVG {
    constructor(shape) {
        this.shape = shape;
    }

    generate() {
        return `<svg width="100" height="100">\n${this.shape.getSVG()}</svg>`;
    }

    svgShape(logoShape) {
        const text = logoShape.text;
        const textColor = logoShape.textColor;
        const shapeColor = logoShape.shapeColor;
        
        switch (logoShape.constructor.name) {
         case 'Square':
            return `<rect width="50" height="50" fill="${shapeColor}" stroke="${textColor}" stroke-width="2"/>
              <text x="25" y="35" fill="${textColor}" text-anchor="middle" font-size="30">${text}</text>`;
        case 'Circle':
            return `<circle cx="50" cy="50" r="25" fill="${shapeColor}" stroke="${textColor}" stroke-width="2"/>
              <text x="50" y="55" fill="${textColor}" text-anchor="middle" font-size="30">${text}</text>`;
        case 'Triangle':
            return `<polygon points="25,75 50,25 75,75" fill="${shapeColor}" stroke="${textColor}" stroke-width="2"/>
              <text x="50" y="55" fill="${textColor}" text-anchor="middle" font-size="30">${text}</text>`;
        default:
            throw new Error(`Invalid shape: ${logoShape.constructor.name}`);
  }
    }
}

module.exports = {SVG}