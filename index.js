// Variables that runs installed packages, generate files, or imports info from their respective files
const inquirer = require('inquirer');
const fs = require('fs');
const {SVG} = require('./lib/svg');
const { Square, Circle, Triangle} = require('./lib/shapes');

// This function runs the prompts to generate the logo based off of the user input
function init () {
inquirer
 .prompt ([
   
    {
        type: 'input',
        message: 'Enter text (Max Characters : 3)',
        name: 'text'
    },

    {
        type: 'input',
        message: 'What color would you like to set the text? (Enter keyword or hex value)',
        name: 'textColor',
    },

    {
        type: 'input',
        message: 'Select A Shape',
        choices: [
            'Square',
            'Circle',
            'Triangle',
        ],
        name: 'shape',
    },

    {
        type: 'input',
        message: 'What color would you the shape to be? (Enter keyword or hex value',     
        name: 'shapeColor'
    }
  ])
 //  This section is called on the returned promise of the inquirer prompts above.
  .then(({text, textColor, shape, shapeColor}) => {
    let logoShape;
    switch (shape) {
        case 'Square':
            logoShape = new Square(text, textColor, shapeColor)
            break;
        
        case 'Circle':
            logoShape = new Circle(text, textColor, shapeColor)
            break;

        case 'Triangle':
            logoShape = new Triangle(text, textColor, shapeColor)
            break;
    }
   
    // This section will generate the logo.svg file based off of the user input from the prompts above
    const svg = new SVG(logoShape);
      const svgString = svg.generate();
      return fs.writeFile('logo.svg', svgString, (err) => {
        if (err) throw err;
        console.log('Your Logo has been Created!');
     });

  });
}

init();