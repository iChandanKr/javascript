// const arr = ["A","B","C"];
// // return an array [{"name":"A"}....];

// const newArr = arr.map((ele)=>{
//     return {"name":ele}
// })
// console.log(newArr)

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 3,
          children: [],
        },
      ],
    },
    {
      value: 4,
      children: [
        {
          value: 5,
          children: [],
        },
        {
          value: 6,
          children: [],
        },
      ],
    },
  ],
};
function calculateSum(node, sum = 0) {
  node.children.map((child) => {
    if (child.children.length == 0) {
      sum += child.value;
    } else {
      sum += calculateSum(child);
    }
  });
  return sum + node.value;
}
const totalValue = calculateSum(tree);
console.log(totalValue);
