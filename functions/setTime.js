function add(a,b,callback){

    setTimeout(() => {
         callback(a,b);
    }, 2000);
}

// add(2,3,(a,b)=> {
//     const sum = a+b;
//     console.log(sum);
// } )

const res = add(2,3,(a,b)=>a+b);
console.log(res)