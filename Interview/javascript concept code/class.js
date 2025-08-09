class Car {
    constructor(color, company, drive) {
        this.color = color;
        this.company = company;
        this.drive = drive;
    }

    description() {
        return `Raman has a ${this.color} color car of ${this.company} which is ${this.drive}`;
    }
}

let car1 = new Car('blue', 'BMW', 'automatic');
console.log(car1.description())
