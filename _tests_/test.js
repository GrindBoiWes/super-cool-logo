const { Square, Circle, Triangle } = require('../lib/shapes');

describe('Shapes', () => {
    describe('Square', () => {
      it('Should create a purple square with teal text that says "wes"', () => {
        const square = new Square('wes', 'teal', 'purple');
        expect(square.getSVG()).toEqual(
          `<rect width="50" height="50" fill="purple" stroke="teal" stroke-width="2"/>
           <text x="25" y="35" fill="teal" font-size="24" text-anchor="middle">wes</text>`
        );
      });
    });
  
    describe('Circle', () => {
      it('Should create a purple circle with teal text that says "wes"', () => {
        const circle = new Circle('wes', 'teal', 'purple');
        expect(circle.getSVG()).toEqual(
          `<circle cx="25" cy="25" r="25" fill="purple" stroke="teal" stroke-width="2"/>
           <text x="25" y="35" fill="teal" font-size="24" text-anchor="middle">wes</text>`
        );
      });
    });
  
    describe('Triangle', () => {
      it('Should create a purple triangle with teal text that says "wes"', () => {
        const triangle = new Triangle('wes', 'teal', 'purple');
        expect(triangle.getSVG()).toEqual(
          `<polygon points="25,10 50,50 0,50" fill="purple" stroke="teal" stroke-width="2"/>
           <text x="25" y="35" fill="teal" font-size="24" text-anchor="middle">wes</text>`
        );
      });
    });
  });
