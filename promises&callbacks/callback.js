// make a pizza
// these are the steps;
// pizza->dough->cheese

function getCheese(callback) {
  setTimeout(() => {
    const cheese = "Cheese";
    console.log("here is the cheese");
    callback(cheese);
  }, 2000);
}

function makeDough(cheese, callback) {
  setTimeout(() => {
    const dough = cheese + " dough";
    console.log("here is the ", dough);
    callback(dough);
  }, 2000);
}

function bakePizza(dough, callback) {
  setTimeout(() => {
    const pizza = dough + " pizza";
    console.log("here is the ", pizza);
    callback(pizza);
  }, 2000);
}

function getPizza() {
  getCheese((cheese) => {
    makeDough(cheese, (dough) => {
      bakePizza(dough, (pizza) => {
        console.log("i got ", pizza);
      });
    });
  });
}

getPizza();
// const getDough = makeDough()
