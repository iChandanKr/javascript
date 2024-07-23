const arr = [
    'chandan',
    'vivek',
    'sujit',
    'ansh',
    'dhruvil'
]

let [f1, f2, fe,...col] = arr;
console.log(f1,f2,fe);
console.log(col)




const obj = {
    name:'chandan',
    age:'22',
    dept:'developer',
    company:'argusoft'
}
const{name:firstName,age,...rest} = obj;
console.log(firstName,age,rest);
