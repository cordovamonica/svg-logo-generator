const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('./lib/colors.js');
const generateSVG = require('./lib/generateSVG.js');


class CLI {
    constructor() {
        this.text = '';
        this.logo = [];
    }

    svg() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter the text to convert to SVG:',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the text color:',
                when: (answers) => {
                    if(answers.textColorChoice === 'color choice') {
                        return true;
                    }
                    return false;
                },
                validate: (answer) => {
                    let lowerCase = answer.toLowerCase();
                    for (var i = 0, len = colors.length; i < len; i++) {
                        if (lowerCase.indexOf(colorChoices[i]) != -1) {
                            return true;
                        }}
                        return console.log('Please enter a valid color.');
                }
            },
            {
                type: 'list',
                name: 'shape',
                choices: ['circle', 'square', 'triangle'],
                message: 'Select the shape:',
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the shape color:',
            },
        ])
        .then(answers => {
            const example = generateSVG(answers);
            writeFile(example);
        })
    }}
    const writeFile = (example) => {
        fs.writeFile('./examples/example.svg', example, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    }
    

module.exports = CLI;
