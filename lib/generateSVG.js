const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');


function generateSVG(answer) {
    if (answer.shape === 'circle') {
        let shape = new Circle(answer.shapeColor, answer.text, answer.textColor)
        return shape.render()
}
    if (answer.shape === 'square') {
        let shape = new Square(answer.shapeColor, answer.text, answer.textColor)
        return shape.render()
    }
    if (answer.shape === 'triangle') {
        let shape = new Triangle(answer.shapeColor, answer.text, answer.textColor)
        return shape.render()
    }

    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd">
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <g>
    <${logo}/>
    <text x="80" y="140" font-size="50px" fill="${textColor}">${text}</text>
    </g>
    </svg>`
};

module.exports = generateSVG;