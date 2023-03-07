const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./examples');
const {Square, Circle, Triangle} = require('./lib/shapes');

const questions = [
   
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
        ]
    },

    {
        type: 'input',
        message: 'What color would you the shape to be? (Enter keyword or hex value',
        name: 'shapeColor'
    }
]