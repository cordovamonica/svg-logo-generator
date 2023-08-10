const inquirer = require('inquirer');
const fs = require('fs');
const colors = require('./colors.js');
const generateSVG = require('./generateSVG.js');
const { writeFile } = require('fs').promises;
const { Circle, Square, Triangle } = require('./shapes.js');
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters',
        validate: function (value) {
            var pass = value.match(
                /^[a-zA-Z0-9]{1,3}$/
            );
            if (pass) {
                return true;
            }
            return 'Please enter up to 3 characters'
    }},
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape',
            choices: ['circle', 'square', 'triangle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color for the shape',
        },
    ];

class CLI {
    constructor() {
        this.text = '';
        this.textColor = '';
        this.shape = '';
        this.shapeColor = '';
    }
    async svg() {
        const answers = await inquirer.prompt(questions);
        this.text = answers.text;
        this.textColor = answers.textColor;
        this.shape = answers.shape;
        this.shapeColor = answers.shapeColor;
        const circle = new Circle(this.shapeColor, this.text, this.shape, this.textColor);
        const square = new Square(this.shapeColor, this.text, this.shape, this.textColor);
        const triangle = new Triangle(this.shapeColor, this.text, this.shape, this.textColor);
        let shape;
        switch (this.shape) {
            case 'circle':
                shape = circle.render();
                break;
            case 'square':
                shape = square.render();
                break;
            case 'triangle':
                shape = triangle.render();
                break;
        }
        const svg = generateSVG({ text: this.text, textColor: this.textColor, shape });
        const filename = `./examples/logo.svg`;
        await writeFile(filename, svg);
        console.log(colors.green, `Generated logo.svg!`);
    }
}


module.exports = CLI;
