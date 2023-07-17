// Import required packacges
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

const {Circle, Triangle, Square} = require("./shapes")

function generateLogo() {
    // Use inquirer to prompt user 
    inquirer
    .prompt([
        {
            type: "input",
            name: "logo",
            message: "Please enter your logo name(3 characters max): ",
        },
        {
            type: "input",
            name: "logoColor",
            message: "Please enter a color for your logo name (hexadecimal or color keyword)): ",
        },
        {
            type: "list",
            name: "shape",
            message: "Please choose a shape for your color: ",
            choices: ["Circle", "Triangle", "Square"]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Please enter a color for your logo shape (hexadecimal or color keyword)): ",
        },
    ])
    .then(res => {
        let shape;

        switch(res.shape) {
            case "Circle":
                shape = new Circle();
                break;
            case "Triangle":
                shape = new Triangle();
                break;
            case "Square":
                shape = new Square();
                break;
        }

        shape.setColor(res.shapeColor)

        const svgLogo = `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shape.render()}
            <text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill="${res.logoColor}">${res.logo}</text>
        </svg>
        `

        fs.writeFileSync("./examples/logo.svg", svgLogo);
    })
}

module.exports = {generateLogo}