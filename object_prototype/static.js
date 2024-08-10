// class staticClass{
//     static staticVariable1 = 1000;
//     constructor(){
//         console.log('constructor is called')
//     }
//     static staticMethod(){
//         this.staticVariable1++;
//         console.log(this.staticVariable1)
//     }
// }

// console.log(staticClass.staticVariable1);
// const c1 = new staticClass();
// staticClass.staticMethod();


function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  const counter = makeCounter();
  console.log(counter())
  console.log(counter())
  console.log(counter())