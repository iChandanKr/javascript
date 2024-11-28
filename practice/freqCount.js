const arr = [ 2, 1, 3, 4, 2, 3, 4,1,1,1,11,1];
const map = new Map();
let maxCount = 0;
let maxRepeated = undefined;
for (ele of arr) {
  if (map.has(ele)) {
    map.set(ele, map.get(ele) + 1);
  } else {
    map.set(ele, 1);
  }
  if (map.get(ele) > maxCount) {
    maxCount = map.get(ele);
    maxRepeated = ele;
  }
}
console.log(maxRepeated)
console.log(map);
