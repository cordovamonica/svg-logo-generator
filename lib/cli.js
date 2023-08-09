const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('./colors.js');
const generateSVG = require('./generateSVG.js');


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
        fs.writeFile('example.svg', example, (err) => {
            if (err) throw err;
            console.log(colors.green, 'The file has been saved!');
        });
    }
    

module.exports = CLI;
