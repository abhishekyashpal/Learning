let obj = {
    name: 'rajan',
};

let address = function (city) {
    return `Candidate ${this.name} is from ${city}`
}

let fullAddress = address.bind(obj, 'Ara');

console.log(address.call(obj, 'Ara'));
console.log(address.apply(obj, ['Ara']));
console.log(fullAddress());