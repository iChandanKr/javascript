/* function person (name,age){
 this.name=name;
 this.age = age;

}
person.prototype.greet = function(){
    return this.name;
} 
const person1 = new person('anant',22);
console.log(person1.greet());
 */

const Person = function (name, gender, birthYear) {
    this.name = name;
    this.gender = gender;
    this.birthYear = birthYear;

}
Person.prototype.calcAge = function () {
    console.log(new Date().getFullYear() - this.birthYear);
}

const john = new Person('john', 'male', 1990);
console.log(john);

// john.calcAge()

