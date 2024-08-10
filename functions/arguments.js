function add (){
  
    console.log(arguments)
    let sum = 0;
    for(let i in arguments){
        sum+= arguments[i]
    }
    console.log(sum);
    console.log('adding');
    let arts = Array.prototype.slice.apply(arguments);
    console.log('line 10',arts);
}

add(3,4,5);


// function add(obj){
//     console.log(obj)
//     let sum = 0;
//     for(let key in obj){
//         sum+= obj[key];
//     }
//     return sum;
// }

// const obj1 = {'first':1,'second':2,'third':3}
// console.log(add.apply(null,obj1))