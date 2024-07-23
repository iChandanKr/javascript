// const obj1 = {
//     name:'xyz',
//     age:23,
//     salary:40000
// }
// console.log(obj1)

// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//     alert( a + " <> " + b );
//     return a - b;
//   });

  // let arr = [1, 15, 2, 9, 8,3]
  // arr.sort(function(a, b) {
  //   console.log( a + " <> " + b );
  //   return a - b;
  // });
  // console.log(arr)



  function add(){
    console.log(typeof(arguments));
    for(let elements in arguments){
      console.log(arguments[elements]);
    }
  }

  add(3,4,5,6,7);
  // [2,3,4,4]
  console.log(...'chandan');