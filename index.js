const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileA = util.promisify(fs.writeFile);
