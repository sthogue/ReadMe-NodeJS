//Required packages for application to run
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for users to enter
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
        name: 'projectTitle',
        message: "What is your projects title"
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide a short description explaining your project"
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: "What commands should I use to install dependencies?"
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
            'The Unlicense',
            'None',
        ],
    },
    {
        type: 'input',
        name: 'tests',
        message: "What commands should I use to run tests?"
    },
    {
        type: 'input',
        name: 'URL',
        message: "Please enter your project URL?"
    },
];

// Writes the ReadME files
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, 'utf8', (err) =>
    // If there is an error it will throw one, if not the console log is initiated
    err ? console.error(err) : console.log('ReadMe file created!')
    );
}

// Initializes the application
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log('Generating ReadMe file');
            console.log(answers)
            return writeToFile('./New-ReadMe/README.md',generateMarkdown(answers));
        })
        .catch(err => console.log(err));
};
// Function call to initialize app
init();
