// let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];

// const highest = grades.reduce((accumulator, currentValue)=>{
//     // if(accumulator>currentValue){
//     //     return accumulator;
//     // }
//     // return currentValue;
//     return Math.max(accumulator,currentValue);
// });
// console.log(highest);

const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y","t"];

const results = votes.reduce(
  (accumulator, currentValue) => {
    if(!accumulator[currentValue]){
      accumulator[currentValue] = 0;
    }
    accumulator[currentValue]++;
    return accumulator;
  },
  { }
);

console.log(results);

// const obj = {
//   y: 0,
//   n: 0,
// };
// obj["y"]++;
// console.log(obj);
