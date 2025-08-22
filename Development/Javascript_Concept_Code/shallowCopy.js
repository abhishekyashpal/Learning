const obj = { 
    name: 'Version 1', 
    additionalInfo: { 
        version: 1 
    } 
};

const shallowCopy1 = { ...obj };
const shallowCopy2 = Object.assign({}, obj);

shallowCopy1.name = 'Version 2';
shallowCopy1.additionalInfo.version = 2;

shallowCopy2.name = 'Version 2';
shallowCopy2.additionalInfo.version = 2;

console.log(obj); // { name: 'Version 1', additionalInfo: { version: 2 } }
console.log(shallowCopy1); // { name: 'Version 2', additionalInfo: { version: 2 } }
console.log(shallowCopy2); // { name: 'Version 2', additionalInfo: { version: 2 } }

