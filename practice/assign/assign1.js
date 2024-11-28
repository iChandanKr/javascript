let count = 0;
const spanCount = document.querySelector("#count");
spanCount.innerHTML = count;
const decrement = document.querySelector("#dec");
decrement.addEventListener("click", () => {
  count--;
  spanCount.innerHTML = count;
});

const increment = document.querySelector("#inc");
increment.addEventListener("click", function increaseValue() {
  count++;
  spanCount.innerHTML = count;
});
