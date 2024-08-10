// const p1 = Promise.resolve(3);
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(9);
  }, 1000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(7);
    // reject("rejected");
  }, 1000);
});

Promise.all([ p2, p3])        
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });


// Promise.allSettled([p2,p3]).then((result)=>{
//     console.log(result)
// })

// Promise.race([p2,p3]).then((result)=>{
//     console.log(result)
// }).catch(data=>{console.log(data)})