const obj2 = {};
// obj2.name = undefined;

try {
  const obj = {
    name: "chandan",
    email: "a@gmail.com",
  };
  const { name, age } = obj;
  console.log(name, age);
  obj2.name = name;
  obj2.age = age;
} catch (error) {
    console.log(error)
}
