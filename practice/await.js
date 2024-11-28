function first() {
  return new Promise((resolve) => {
    setTimeout(() => {
      //   console.log("hello");
      resolve("hello1");
    }, 1000);
  });
}

function second() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log("hello");
      resolve("world");
    }, 1000);
  });
}

async function promiseCall() {
  try {
    const a = await first();
    console.log(a)
    const b =await second();
    if(b!== 'hello'){
        throw new Error('error occurs in first func')
    }
    console.log(b);
  } catch (error) {
    console.log(error)
  }
}

promiseCall()