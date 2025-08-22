function Person(name) {
    let _name = name;
    getName = function() {
        return _name;
    };
    setName = function(newName) {
        _name = newName;
    };
}

let person = new Person("John");
console.log(person.getName()); // John
person.setName("Jane");
console.log(person.getName()); // Jane

