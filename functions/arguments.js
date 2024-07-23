// function add (){
//     // console.log(arguments)
//     // let sum = 0;
//     // for(let i in arguments){
//     //     sum+= arguments[i]
//     // }
//     // console.log(sum);
//     // console.log('adding');
//     let arts = Array.prototype.slice.apply(arguments);
//     console.log(arts);
// }

// console.log(add(3,4,5));

const arr = [2,3,4,5];
const arr1 = arr.apply();
console.log(arr1)
