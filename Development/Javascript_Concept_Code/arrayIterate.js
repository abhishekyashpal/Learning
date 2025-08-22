const fruits = ["apple", "banana", "cherry"];

for (const fruit of fruits) {
  console.log(fruit);
}

const numbers = [1, 2, 3, 4, 5];

for (const index in numbers) {
  console.log(`Index ${index} has value ${numbers[index]}`);
}