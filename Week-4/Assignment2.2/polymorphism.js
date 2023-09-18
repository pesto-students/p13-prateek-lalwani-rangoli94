class Shape {
    calculateArea() { }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super()
        this.width = width
        this.height = height
    }
    calculateArea() {
        return this.width * this.height
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super()
        this.base = base
        this.height = height
    }
    calculateArea() {
        return ((this.base * this.height) / 2)
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius
    }
    calculateArea() {
        return (Math.PI * this.radius * this.radius)
    }
}

const obj1 = new Rectangle(10, 12)
console.log(obj1.calculateArea())

const obj2 = new Triangle(10, 12)
console.log(obj2.calculateArea())

const obj3 = new Circle(10)
console.log(obj3.calculateArea())