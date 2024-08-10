// destructuring---------------------
const arr = ["chandan", "vivek", "sujit", "ansh", "dhruvil"];

let [f1, f2, fe, ...col] = arr;
console.log(f1, f2, fe);
console.log(col);

const obj = {
  name: "chandan",
  age: "22",
  dept: "developer",
  company: "argusoft",
};
const { name: firstName, age, ...rest } = obj;
console.log(firstName, age, rest);

var data = {
  title: "title1",
  bar: "asdf",
  innerData: [
    {
      title: "inner-title1",
      foo: "asdf",
    },
    {
      title: "inner-title2",
      foo: "asdf",
    },
  ],
};

// const { title, bar, innerData } = data;

const {
  title,
  bar,
  innerData: [first, second],
} = data;
const { title: title234, foo } = first;
console.log(title234);
console.log(title);
// console.log(innerData);
console.log(first);
console.log(second);

const arr1 = [2, 3, 4];
const arr2 = [1, ...arr1];
console.log(arr2);

console.log(...arr1); // 2 3 4 spread operator extract elements from iterables into single
// single value

// rest operator use case
function sum(...theArgs) {
  //  rest syntax collects multiple elements and "condenses" them into a single element
  console.log("line 36", ...theArgs);
  let total = 0;
  for (const args of theArgs) {
    total += args;
  }
  return total;
}

const total = sum(1, 2, 3, 4, 5);
console.log(total);

const array = [1, 2, 3];
const obj1 = { ...array }; // { 0: 1, 1: 2, 2: 3 }

// reduce method -------------
const votes = [
  "y",
  "y",
  "n",
  "y",
  "n",
  "y",
  "n",
  "y",
  "n",
  "n",
  "n",
  "y",
  "y",
  "t",
];

const results = votes.reduce((accumulator, currentValue) => {
  if (!accumulator[currentValue]) {
    accumulator[currentValue] = 0;
  }
  accumulator[currentValue]++;

  return accumulator;
}, {});

console.log(results); // { y: 7, n: 6, t: 1 }

// map------
const a = [1, 2, 3];
const b = a.map((el) => el * 2);
console.log(b); // [ 2, 4, 6 ]

// filter--------
const odds = a.filter((el) => el % 2 != 0);
console.log(odds); // [1,3]

// join-------
const elements = ["Fire", "Air", "Water"];
console.log(elements.join()); // Fire,Air,Water
console.log(elements.join("-")); // Fire-Air-Water

// split-------
const sen = " Fire,Air,Water";
const newArr = sen.split(",");
console.log(newArr); // [ ' Fire', 'Air', 'Water' ]
