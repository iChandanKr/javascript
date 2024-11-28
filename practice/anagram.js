let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// "nap,teachers,ear" or "PAN,cheaters,era"

const map = new Map();
for(let word of arr){
    const sortedWord =word.toLowerCase().split('').sort().join('');
    // console.log(sortedWord);
    map.set(sortedWord,word);
}
const ans = Array.from( map.values());
console.log(ans)
