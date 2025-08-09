
let obj = {
    name: 'rajan',
    fullName: function() {
        return this.name
    }
}

let motor = 'BMW';
console.log(motor);

function fruitName() {
    let fruit = 'apple'
    console.log(fruit);
    return this.fruit;
}

console.log(obj.fullName());
fruitName();