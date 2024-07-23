class Timer {
  constructor(durationInput, startBtn, pauseBtn) {
    this.durationInput = durationInput;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;
    startBtn.addEventListener("click", this.start);
  }

  start = ()=> {
    console.log("time to start timer!");
    // console.log(durationInput.value);
    console.log(this);
    setInterval(this.tick, 1000);
  }


 tick(){
    console.log('tick');
 }
}

const durationInput = document.querySelector("#durationInput");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");

const t1 = new Timer(durationInput, startBtn, pauseBtn);
