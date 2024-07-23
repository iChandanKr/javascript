const arr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// console.log(arr[0].toUpperCase());

function isPangram(str) {
  const modifiedStr = str.toLowerCase();
  for (let i of arr) {
    // console.log(i);
    if (!modifiedStr.includes(i)) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("abcdefghijklmnopQrstuvwxyzavcked"));
