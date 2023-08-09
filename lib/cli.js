const inquirer = require('inquirer');
const fs = require('fs');

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
                message: 'Select the shape:',
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the shape color:',
            },
        ])
        .then(answers => {
            this.text = answers.text;
            this.textColor = answers.textColor;
            this.shape = answers.shape;
            this.shapeColor = answers.shapeColor;
        if(this.text.length > 3){
            throw error('Text must be up to 3 characters')
        }
        this.logo.push(this.text, this.textColor, this.shape, this.shapeColor);
    })
    .then(() => {
        fs.writeFile('./examples', this.text, this.logo, this.textColor, this.shapeColor),
        function (err) {if (err) throw err;}
    })
    .catch(error => {
        console.log(error);
    }
    )
}
}

module.exports = CLI;
