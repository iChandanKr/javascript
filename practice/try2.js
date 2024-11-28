function f1() {
  // const id = 7;
 
  try {
    console.log(id);
    if (id) {
      console.log(id);
    }
  } catch (err) {
    console.log("inside catch block");
    throw new Error("id is undefined throwed through catch ");
  } finally {
    console.log('sldkf')
    return 1;
    // throw new Error(" in f1 finally ");
    // let db=1;
  }
}

function f2() {
  try {
    console.log("inside try", f1());
  } catch (error) {
    console.log("in f2...", error);
  }
}

f2();
