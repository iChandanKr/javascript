const nos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "A"];
const suits = ["clubs", "spades", "hearts", "diamonds"];

function randomPair(nos, suits) {
  let indexOfnos = Math.floor(Math.random() * nos.length);
  let indexOfSuits = Math.floor(Math.random() * suits.length);
//   console.log(nos[indexOfnos]);
//   console.log(suits[indexOfSuits]);
  return { value: nos[indexOfnos], suit: suits[indexOfSuits] };
}

console.log(randomPair(nos, suits));
