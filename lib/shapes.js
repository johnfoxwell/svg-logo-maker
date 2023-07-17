// Constructor for shapes
class Shape {
    constructor() {
        this.color = "blue"
    }

    setColor(color) {
        this.color = color;
    }
}


class Circle extends Shape {
    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.color}"> </circle>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"> </polygon>`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="60" y="10" rx="10" ry="10" width="30" height="30" fill="${this.color}"> </rect>`
    }
}


module.exports = {Shape, Circle, Triangle, Square}