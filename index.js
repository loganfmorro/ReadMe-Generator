const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

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

//These are the results of the Read Me context following the user's responses to question
function markdownGen(response) {
    return `
# ${response.title}

# Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Description:
![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")
    ${response.description}

## Installation:
    ${response.installation}

## Usage:
    ${response.usage}

##Contributing:
    ${reponse.contribution}

## Test:
    ${response.test}

## Credits:
    ${response.credit}

## License:
    For more information about the License, click the link below:
- [License](https://opensource.org/licenses/${response.license})

## Questions:
    For questions about this ReadMe Generator, you can visit my GitHub page at the following link:
- [GitHub Profile](https://github.com/${response.username})

For additional questions please reach out to my email at: ${response.email}.
`;
}

// This is our function to initialize the ReadMe Generator
async function init() {
    try {
        const response = await userPrompts();
        const readMe = markdownGen(response);

        await writeFileA("README.md", readMe);
        console.log("Success!");
    } catch (err) {
        console.log(err);
    }
}
init();