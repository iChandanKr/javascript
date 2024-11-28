// const obj1 = {
//   name: "xyz",
//   tech: {
//     programming: {
//       type: "dev",
//       exp: 5,
//     },
//   },
// };

// const obj2 = obj1;
// obj2.name = "chandan";
// obj2.tech.programming.type = "prod";
// console.log(obj1);
// console.log(obj2);

const obj = { name: "Version 1", additionalInfo: { version: 1 } };

const shallowCopy1 = { ...obj };
const shallowCopy2 = Object.assign({}, obj);


shallowCopy1.name = "Version 2";
shallowCopy1.additionalInfo.version = 2;

shallowCopy2.name = "Version 3";
shallowCopy2.additionalInfo.version = 3;

console.log(obj); // { name: 'Version 1', additionalInfo: { version: 2 } }
console.log(shallowCopy1); // { name: 'Version 2', additionalInfo: { version: 2 } }
console.log(shallowCopy2); // { name: 'Version 3', additionalInfo: { version: 2 } }
