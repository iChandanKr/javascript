const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
  { name: "Product 9", price: 90, category: "Ele" },

];
// Output
// [
//   { category: 'Clothes', average: 55 },
//   { category: 'Electronics', average: 55 }
// ]

const res = products.reduce((acc, curr, index) => {
    // console.log(curr)
    if(acc[curr.category]){
        acc[curr.category] += curr.price;
        acc[`${curr.category}Count`]++;
    }else{
        acc[curr.category]= curr.price;
        acc[`${curr.category}Count`] = 1;
    }
    return acc;
}, {});
console.log(res);
const keys = Object.keys(res);
const values = Object.values(res);
const len = keys.length;
const ans = [];
for(let i=1;i<len;i+=2){
    ans.push({category:keys[i-1],average:values[i-1]/values[i]});
}

console.log(keys)
console.log(values)
console.log(ans)
