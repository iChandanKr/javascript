const durationInput = document.querySelector("#durationInput");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const circle = document.querySelector("circle");
const perimeter = 2 * Math.PI * circle.getAttribute("r");
circle.setAttribute("stroke-dasharray", perimeter);
let duration;

const t1 = new Timer(durationInput, startBtn, pauseBtn, {
  onStart(timeDuration) {
    console.log("timer started");
    duration = timeDuration;
  },
  onTick(timeRemaining) {
    console.log(timeRemaining);
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log("onComplete");
  },
});
