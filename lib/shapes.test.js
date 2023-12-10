// Importing shape classes from file
const { Triangle, Square, Circle } = require('./shapes');

// Testing shapes
describe('Triangle test', () => {
    test('Triangle should render correctly', () => {
        const triangle = new Triangle();
        const expected = '<polygon points="150, 18, 244, 182" fill="" />';
        expect(triangle.render()).toBe(expected);
    });

    test('Circle should render correctly', () => {
        const circle = new Circle();
        const expected = `<circle cx='0' cy='0' r='50' fill='' />`;
        expect(circle.render()).toBe(expected);
    });

    test('Square should render correctly', () => {
        const square = new Square();
        const expected = "<rect x='50' y='50' width='100' height='100' fill='' />";
        expect(square.render()).toBe(expected);
    });
});

