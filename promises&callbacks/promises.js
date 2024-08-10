function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "Cheese";
      resolve(cheese);
    }, 2000);
  });
}

function getDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "Dough";
      resolve(dough);
    //   reject('bad cheese')
    }, 2000);
  });
}

function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "pizza";
      resolve(pizza);
    }, 2000);
  });
}

// getCheese()
//   .then((data) => {
//     console.log("here is the cheese", data);
//     return getDough(data);
//   })
//   .then((data) => {
//     console.log("here is the dough", data);
//     return bakePizza(data);
//   })
//   .then((data) => {
//     console.log("here is the cheese", data);
//   })
//   .catch((data) => {
//     console.log(data);
//   })
//   .finally(() => {
//     console.log("process ended");
//   });

async function pizza() {
  try {
    const cheese = await getCheese();
    const dough = await getDough(cheese);
    const myPizza = await bakePizza(dough);
    console.log(myPizza);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("process ended");
  }
}
pizza();
