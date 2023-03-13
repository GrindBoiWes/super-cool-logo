const { Square, Circle, Triangle } = require('./lib/shapes');

describe('Shapes', () => {
    describe('Square', () => {
        it('Should create a purple square with teal text that says "wes"', () => {
            const square = new Square('wes', 'teal', 'purple')
            expect(square.getSVG()).toEqual()(`<rect width="50" height="50" fill="purple" stroke="teal" stroke-width="2"/>
            <text x="25" y="35" fill="teal" text-anchor="middle" font-size="30">wes</text>`)
        })
    })
});

