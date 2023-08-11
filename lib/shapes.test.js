const Shapes = require('../lib/shapes.js');

describe('Shapes', () => {
    describe('Circle', () => {
        it('should return a circle', () => {
            const circle = new Shapes.Circle();
            expect(circle.render('<circle cx="150" cy="100" r="80" fill="red" />'));
        });
    });
});
describe('Shapes', () => {
    describe('Square', () => {
        it('should return a square', () => {
            const square = new Shapes.Square();
            expect(square.render(`<rect width="300" height="200" fill="blue" />`));
        });
    });
});
describe('Shapes', () => {
    describe('Triangle', () => {
        it('should return a triangle', () => {
            const triangle = new Shapes.Triangle();
            expect(triangle.render(`<polygon points="150,0 300,200 0,200" fill="green" />`));
        });
    });
});
