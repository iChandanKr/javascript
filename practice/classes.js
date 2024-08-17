class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get getName() {
    console.log("Hello Mr." + this.name);
  }


  set setAge(value) {
    console.log(value)
    this.age = this.age + value;
    return this.age;
  }


//   get age() {
//     return this.age;
//   }
}

const p1 = new Person("Chandan", 20);
p1.getName;
p1.setAge = 3;
console.log(p1.age);

// class ClassWithPrivateField {
//     #privateField;

//     constructor() {
//       this.#privateField = 42;
//     }
//   }

//   class Subclass extends ClassWithPrivateField {
//     #subPrivateField;

//     constructor() {
//       super();
//       this.#subPrivateField = 23;
//     }
//   }

//   console.log(new Subclass()); // In some dev tools, it shows Subclass {#privateField: 42, #subPrivateField: 23}
