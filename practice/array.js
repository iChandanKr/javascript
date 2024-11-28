const str = "laaaaaaaasdjflkkdjflskjdfsldfj";
const arr = new Array(25).fill(0);
for (let i = 0; i <= 25; i++) {
  arr[str.charCodeAt(i) - "a".charCodeAt(0)]++;
}
console.log(arr);
