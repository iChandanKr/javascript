// find factorial of 6
const input = 5;
const arr = [];
arr.length = input;
arr.fill(input);
// console.log(arr);

const res = arr.reduce((acc,curr,index)=>{
    return acc*(curr-index)
})
console.log(res)