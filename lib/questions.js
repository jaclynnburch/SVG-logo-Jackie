const inquirer = require("inquirer"); // Import inquirer without destructuring

function promptUser() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Enter up to three characters.',
            name: 'text',
            validate: function (input) {
                // Validate the input length for the 'text' field
                return input.length <= 3 || 'Must enter a value of no more than 3 characters';
            }
        },
        {
            type: 'input',
            message: 'Enter color keyword or a hexadecimal number.',
            name: 'color', // Change the name to 'color' to avoid conflict
        },
        {
            type: 'list',
            message: 'Render a shape',
            choices: ['triangle', 'square', 'circle'],
            name: 'shape',
        },
    ])
    .then((answers) => {
        // You can perform additional validation here if needed
        writeToFile('logo.svg', answers);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

// Export the promptUser function
module.exports = { promptUser };

// Function to write to file, replace this with your actual implementation
function writeToFile(fileName, data) {
    // Implement your logic to write to a file
    console.log('Writing to file:', fileName, 'with data:', data);
}

// Calling promptUser function so inquirer prompts fire off when the application is run
promptUser();

