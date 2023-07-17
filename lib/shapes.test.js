const {Circle, Triangle, Square} = require("./shapes")

describe("shape classes", () => {
    test("Circle should render", () => {
        const circle = new Circle();
        expect(circle.render().toEqual('<circle cx="25" cy="75" r="20"/>'))
    });

    test("Triangle should render", () => {
        const triangle = new Triangle();
        expect(triangle.render().toEqual('<polygon points="150, 18 244, 182 56, 182"/>'))
    });

    test("Square should render", () => {
        const square = new Square();
        expect(square.render().toEqual('<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>'))
    });
});