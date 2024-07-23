// const arr = ['cat','dog','rabbit'];
// const [a,b,c] = arr;
// console.log(a);

// const student = {
//     name: "chandan",
//     id: 236,
//     techs: {
//         dev: "vue.js, react.js, angular.js",
//         dsa: "c/c++",
//         humties: "sst,poetry"
//     }
// }

// const {name,techs:{dev:hi,dsa,humties}} = student;
// console.log(hi);


const obj = { a: 1, b: { c: 2 } };
const {
  a,
  b: { c: d },
} = obj;
// Two variables are bound: `a` and `d`
console.log(a,b);