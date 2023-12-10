// Importing files
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Polygon, Square } = require('./lib/shapes');
const { promptUser } = require('./lib/questions'); // Assuming you have a promptUser function in your questions module

const init = () => {
    promptUser() // Call the promptUser function directly
        .then((data) => {
            console.log('Creating svg file.');
            switch (data.shape) { 
                case 'square':
                    console.log('Square is being created.');
                    const square = new Square(data.color); // Assuming color is the property you want to pass
                    fs.writeFile('main/output/logo.svg', square.render(), (err) => {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log('Square created.');
                        }
                    });
                    break; // Add a break statement here to exit the switch block
                    case 'circle':
                        console.log('circle is being created.');
                        const circle = new Circle(data.color); // Assuming color is the property you want to pass
                        fs.writeFile('main/output/logo.svg', circle.render(), (err) => {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log('Circle created.');
                            }
                        });
                        break; case 'Triangle':
                        console.log('Square is being created.');
                        const triangle= new Triangle(data.color); // Assuming color is the property you want to pass
                        fs.writeFile('main/output/logo.svg', square.render(), (err) => {
                            if (err) {
                                console.error(err);
                            } else {
                                console.log('Triangle created.');
                            }
                        });
                        break;// Add cases for other shapes if needed
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

// Call the init function
init();

