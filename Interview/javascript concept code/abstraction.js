class Shape {
    constructor(color) {
      this.color = color;
    }
  
    // Abstract method (to be overridden by subclasses)
    getArea() {
      throw new Error('Method getArea() must be implemented.');
    }
  
    // Concrete method
    getColor() {
      return `This shape is ${this.color}.`;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    // Override abstract method
    getArea() {
        return this.width * this.height;
    }
}

const rectangle = new Rectangle('blue', 3, 4);

console.log(rectangle.getColor());
console.log(rectangle.getArea());