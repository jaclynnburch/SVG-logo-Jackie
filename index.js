// Importing files
const fs = require('fs').promises;
const inquirer = require('inquirer');
const { Circle, Polygon, Square, Triangle } = require('./lib/shapes');



// Inquirer prompt
inquirer.prompt([
    {
      name: 'text',
      message: 'Enter the text for the logo (up to three characters):',
      validate: (input) => {
        return input.length > 0 && input.length <= 3;
      }
    },
    {
      name: 'textColor',
      message: 'Enter the text color or hexadecimal:',
      default: 'black'
    },
    {
      name: 'shape',
      message: 'Select a shape:',
      type: 'list',
      choices: ['circle', 'triangle', 'square']
    },
    {
      name: 'shapeColor',
      message: 'Enter the shape color or hexadecimal:',
      default: 'blue'
    }
  ]).then((answers) => {

    // Generate the SVG code using the user input
    const svgCode = generateSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
  
    // Save the SVG code to an SVG file
    fs.writeFile('logo.svg', svgCode, (err) => {
      if (err) throw err;
      console.log('Logo saved as logo.svg');
    });
  });

  function generateSVG(text, textColor, shape, shapeColor) {
    let shapeCode;
  
    // Generate the SVG code based on the selected shape
    switch (shape) {
      case 'circle':
        shapeCode = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
        break;
      case 'triangle':
        shapeCode = `<polygon points="100,50 200,150 0,150" fill="${shapeColor}" />`;
        break;
      case 'square':
        shapeCode = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
        break;
      default:
        shapeCode = '';
    }
  
    // Generate the complete SVG code with the specified text and colors
    const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeCode}
      <text x="150" y="100" text-anchor="middle" fill="${textColor}" font-size="48">${text}</text>
    </svg>`;
  
    return svgCode;
  }