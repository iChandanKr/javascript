// let duration = 30;

// setInterval((duration) => {
//     console.log(duration)
//     if(duration>0){
//         console.log(duration);
//         duration--;
//     }
//     else{
//         console.log('time out')
//     }

// }, 1000);

class Timer {
  constructor(duration) {
    this.duration = duration;
  }
  start() {
    let { duration } = this;
    console.log("timer start");
    setInterval(function clock() {
      if (duration >= 0) {
        console.log(duration--);
      } else {
        console.log(duration);
        clearInterval();
      }
    }, 1000);
  }
}

const t1 = new Timer(3);
t1.start();
