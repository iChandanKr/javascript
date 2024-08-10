class Timer {
    constructor(durationInput, startBtn, pauseBtn,callbacks) {
      this.durationInput = durationInput;
      this.startBtn = startBtn;
      this.pauseBtn = pauseBtn;
      if(callbacks){

          this.onStart = callbacks.onStart;
          this.onTick = callbacks.onTick;
          this.onComplete = callbacks.onComplete;

      }
      startBtn.addEventListener("click", this.start);
      pauseBtn.addEventListener("click", this.pause);
    }
  
    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
      this.tick();
      this.timer = setInterval(this.tick, 10);
    };
  
    tick = () => {
      
      // console.log(durationInput.value);
      // this.durationInput.value = this.durationInput.value - 1;
      const timeRemaining = this.timeRemaining; // we do not need to write () in this.timeRemaining its automatically call because of get keyword
      if (this.timeRemaining <= 0) {
        this.pause();
      } else {
          this.timeRemaining = (timeRemaining - .01).toFixed(2); // here we manipulate timeRemaining its automatically call the setter and updated value passed as argument i.e. time in set timeRemaining method;
          if(this.onTick){
              this.onTick(this.timeRemaining);
          }
      }
    };
    pause = () => {
      clearInterval(this.timer);
      if(this.onComplete){
        this.onComplete();
      }
    };
    get timeRemaining() {
      return parseFloat(this.durationInput.value);
    }
    set timeRemaining(time) {
      this.durationInput.value = time;
    }
  }
  