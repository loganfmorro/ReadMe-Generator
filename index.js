const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { type } = require('os');

const writeFileA = util.promisify(fs.writeFile);

function userPrompts() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please describe your project here.",
            name: "description"
        },
        {
            type: "input",
            message: "What are the installation instructions for this project? If there aren't any, simply write NONE.",
            name: "installation"
        },
        {
            type: "input",
            message: "What would you like your application to be used for?",
            name: "usage"
        },
        {
            type: "input",
            message: "Who contributed to this project?",
            name: "contribution"
        },
        {
            type: "input",
            message: "What are the test intructions for your project?",
            name: "test"
        },
        {
            type: "checkbox",
            message: "Please select a license to use.",
            choices: [
                "Apache",
                "MIT",
                "ISC",
                "GNJ GPLv3",
            ],
            name: "license"
        },
        {
            type: "input",
            message: "Who should be credited for this work?",
            name: "credit"
        },
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
    ]);
}