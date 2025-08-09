class Animal {
    speak() {
        console.log("The animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("The dog barks.");
    }
}

function makeAnimalSpeaks(animal) {
    animal.speak(animal)
}

let myDog = new Dog();
makeAnimalSpeaks(myDog);