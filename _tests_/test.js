const { Square, Circle, Triangle } = require('../lib/shapes');
// This section runs the tests based off of the users input. It should match the text below to pass.
// If it does not pass, an error will occur in the terminal
describe('Shapes', () => {
    describe('Square', () => {
      it('Should create a purple square with teal text that says "wes"', () => {
        const square = new Square('wes', 'teal', 'purple');
        expect(square.getSVG()).toEqual(
        `<rect width="150" height="150" fill="purple" stroke="teal" stroke-width="2"/>
      <text x="125" y="90" fill="teal" font-size="60" text-anchor="middle">wes</text>`
);
      });
    });
  
    describe('Circle', () => {
      it('Should create a purple circle with teal text that says "wes"', () => {
        const circle = new Circle('wes', 'teal', 'purple');
        expect(circle.getSVG()).toEqual(
        `<circle cx="150" cy="100" r="80" fill="purple" stroke="teal" stroke-width="2"/>
      <text x="150" y="125" fill="teal" font-size="60" text-anchor="middle">wes</text>`
);
      });
    });
  
    describe('Triangle', () => {
      it('Should create a purple triangle with teal text that says "wes"', () => {
        const triangle = new Triangle('wes', 'teal', 'purple');
        expect(triangle.getSVG()).toEqual(
        `<polygon points="25,175 150,0 275,175" fill="purple" stroke="teal" stroke-width="2"/>
      <text x="150" y="120" fill="teal" font-size="60" text-anchor="middle">wes</text>`
);
      });
    });
  });
