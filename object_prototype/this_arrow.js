// behaviour of this in arrow function;
console.log(this);
const person = {
  first: "Chandan",
  last: "kumar",
  nickName: "racer",
  fullName() {
    console.log(this);
    const { first, last, nickName } = this;
                                          
    return first + last;
  },

  laugh:  ()=> {
    console.log('its',this); // here this inherit  global object i.e. window it has not local object person's reference
    // return this.first;
  },
};
// console.log(person.laugh());
person.laugh()
console.log(person.fullName());

// const annoyer = {
//   phrases: [
//     "literally",
//     "cray cray",
//     "i can't even",
//     "totes!",
//     "yolo",
//     "can't stop won't stop",
//   ],

//   pickPharse() {
//     const { phrases } = this;
//     const idx = Math.floor(Math.random() * phrases.length);
//     return phrases[idx];
//   },
//   start() {
// here we have access of this 
//     //   return  this.pickPharse()
    // setInterval(function () {        // here inside normal function has not access of this   console.log(this)      
//       console.log(this.pickPharse());
//     }, 3000);
//   },
//   start() {
//     //   return  this.pickPharse()
//     setInterval(()=> {       // arrow function has by default access of its parents this
//         console.log(this)
//       console.log(this.pickPharse());   
//     }, 3000);
//   },

// };
// console.log(annoyer.start());
// annoyer.start();
