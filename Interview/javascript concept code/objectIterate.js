const fullIntro = {
    name: 'rajan',
    class: '10',
    address: 'kadipur'
};

for (const [key, value] of Object.entries(fullIntro)) {
  console.log(key + ' ' + value);
}

for (const key in fullIntro) {
  console.log('key', fullIntro[key]);
}