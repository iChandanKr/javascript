const arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
const map1 = new Map();
let count = 1;
let i = 0;
arr.forEach((a) => {
  if (map1.get(a)) {
    map1.set(a, map1.get(a) + 1);
  } else {
    map1.set(a, 1);
  }
  i++;
});
console.log(map1);
let maxCount = map1.entries();
// for(const [key,value] of map1.entries()){
//     console.log([key,value])
// }
for(let i=1;i<map1.size;i++){
    const [Key,value] = map1.entries()
    console.log(map1.get())
}
