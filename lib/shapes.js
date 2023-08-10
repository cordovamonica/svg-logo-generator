class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shape = shape;
}
}

class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<rect width="300" height="200" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<polygon points="150,0 300,200 0,200" fill="${this.shapeColor}" />`;
    }
}

module.exports = {
    Shape: Shape,
    Circle: Circle,
    Square: Square,
    Triangle: Triangle,
};