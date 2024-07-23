// let age = 10;
function Person() {
  let age =0;
    // this.age = 0;
  
    setInterval(function growUp() {
      // Regular function context, `this` refers to the global object (or undefined in strict mode)
      console.log(this.age);
      this.age++;
    }, 1000);
  }
  
  const person = new Person();
  