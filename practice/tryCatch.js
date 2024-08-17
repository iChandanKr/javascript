function f1() {
  const id = 7;
  try {
    console.log(id);
    if (id) {
      console.log(id);
    }
    else{
        console.log('lkjk')
        throw new Error('id is undefined')
    }
  } catch (a) {
    // console.log(err);
    throw new Error("id is undefined");
  } finally {
    return id;
  }
}

function f2() {
  try {
   const res =  f1();
   console.log(res);
  } catch (error) {
    console.log("in f2", error);
  }
}

f2();
