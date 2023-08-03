// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    },
    {
        type: 'input',
        name: 'project-title',
        message: "What is your projects title"
    },
    {
        type: 'input',
        name: 'Description',
        message: "Provide a short description explaining the what, why , and how of your project"
    },
    {
        type: 'input',
        name: 'Install-instructions',
        message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running."
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide instructions and examples for use."
    },
    {
        type: 'input',
        name: 'credit',
        message: "Who do you want to credit? Who did you collaborate on the project with?"
    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license should it have?",
        choices: [ 
            'Apache License 2.0', 
            'BSD 2-clause license', 
            'BSD 3-clause "New" or "Revised" license',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License v2.1',
            'MIT License',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ],
    },
    {
        type: 'input',
        name: 'command',
        message: "What commands should I use to install dependencies?"
    },
    {
        type: 'input',
        name: 'tests',
        message: "What commands should I use to run tests?"
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
