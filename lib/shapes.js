class Shapes {
    constructor() {
        this.shapeColor = '';
    }
    render() {
        throw new Error('You have to implement the method render!');
    }
    setColor(color) {
        this.shapeColor = color;
        return this.shapeColor;
    }
}

module.exports = Shapes;