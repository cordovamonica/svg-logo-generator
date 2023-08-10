class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shape = shape;
}
}

class Circle extends Shape {
    constructor(shapeColor, text, shape, textColor) {
        super(shapeColor, text, shape, textColor);
    };
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
    }
}

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<rect width="300" height="200" fill="${shapeColor}" />`;
    }
}

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<polygon points="150,0 300,200 0,200" fill="${shapeColor}" />`;
    }
}

module.exports = {
    Circle, Square, Triangle
};