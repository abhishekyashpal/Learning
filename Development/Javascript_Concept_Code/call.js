let obj = {
    firstName: 'rajan',
    lastName: 'yashpal'
};

let address = function (city, district) {
    return `Candidate ${this.firstName} ${this.lastName} is from ${city} ${district}`
}

let fullAddress = address.bind(obj, 'Ara', 'Bihar');

console.log(address.call(obj, 'Ara', 'Bihar'));
console.log(address.apply(obj, ['Ara', 'Bihar']));
console.log(fullAddress());