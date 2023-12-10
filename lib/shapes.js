class Shape {
    constructor() {
        this.color = '';
    }

    setColor(colorVar) {
        this.color = colorVar;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18, 244, 182" fill="${this.color}" />`; 
    }
}

class Square extends Shape {
    render() {
        return `<rect x='50' y='50' width='100' height='100' fill='${this.color}' />`; 
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx='0' cy='0' r='50' fill='${this.color}' />`; 
    }
}

// Exports classes
module.exports = { Shape, Triangle, Square, Circle };
