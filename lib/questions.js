const inquirer = require('inquirer');

function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Enter up to three characters:',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Enter color keyword or a hexadecimal number:',
            name: 'color',
        },
        {
            type: 'list',
            message: 'Render a shape:',
            choices: ['triangle', 'square', 'circle'],
            name: 'shape',
        },
    ]);
}

const init = async () => {
    try {
        const data = await promptUser();
        console.log('Creating svg file.');
        // Handle the rest of your logic based on the user's input (data)
        // ...
    } catch (error) {
        console.error('Error:', error);
    }
};

module.export = promptUser;

// Call the init function
init();
