function f1() {
    //  const id = 7;
  try {
    if (id) {
      console.log(id, "inside try");
    }
  } catch (error) {
    console.log("in f1 catch", error);
    throw new Error('error catch of f1')
  }
  finally{
    console.log('inside finally f1');
    throw new Error('inside  finally of f1')
    
  }
}

function f2() {
  try {
    console.log('inside try 156')
    const res = f1();
    console.log('line 18')
    if (res) {
      console.log(res);
      console.log('21')
    } else{
        console.log('sldjflskdjflskfj')
        throw new Error("there is no any value returned by f1");
    }
    
  } catch (error) {
    console.log("in f2", error);
    // throw new Error('In f2')
  }
  
}

f2();
