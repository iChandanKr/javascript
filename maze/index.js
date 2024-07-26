const {
  World,
  Bodies,
  Runner,
  Render,
  Engine,
  Mouse,
  MouseConstraint,
  Body,
  Events,
} = Matter;

const engine = Engine.create();
engine.world.gravity.y = 0;

const { world } = engine;
// const width = 600;
// const height = 600;
// const cells = 3;
const cellsHorizontal = 6;
const cellsVertical = 10;
const width = window.innerWidth;
const height = window.innerHeight;
const unitLengthX = width / cellsHorizontal;
const unitLengthY = height / cellsVertical;
// const unitLength = width / cells;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height,
  },
});

Render.run(render);
Runner.run(Runner.create(), engine);

World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);

// walls

const walls = [
  Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 2, height, { isStatic: true }),
];
World.add(world, walls);

// maze generation:
const shuffle = (arr) => {
  let counter = arr.length;
  while (counter) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }
  return arr;
};

// for (let i = 0; i < 50; i++) {

//     if(Math.random()>0.5){

//         let shape = Bodies.rectangle(Math.random()*width, Math.random()*height, 50, 50, {});
//         World.add(world, shape);
//     }
//     else{

//         let shape = Bodies.circle(Math.random()*width, Math.random()*height, 50);
//         World.add(world, shape);
//     }
// }

const grid = Array(cellsVertical)
  .fill(null)
  .map((i) => {
    return (i = Array(cellsHorizontal).fill(false));
  });

const horizontal = Array(cellsVertical - 1)
  .fill(null)
  .map((i) => {
    return (i = Array(cellsHorizontal).fill(false));
  });

const vertical = Array(cellsVertical)
  .fill(null)
  .map((i) => {
    return (i = Array(cellsHorizontal - 1).fill(false));
  });
// console.log(vertical);
console.log(horizontal);

// initilize the cell of grid.

const startRow = Math.floor(Math.random() * cellsVertical);
const startColumn = Math.floor(Math.random() * cellsHorizontal);

const stepThroughCell = (row, column) => {
  // if already visited then return
  if (grid[row][column]) {
    return;
  }
  // if not visited yet
  grid[row][column] = true;

  // Assamble random-ordered list of neighbours
  const neighbours = shuffle([
    [row - 1, column, "top"],
    [row, column + 1, "right"],
    [row + 1, column, "bottom"],
    [row, column - 1, "left"],
  ]);
  //   console.log(neighbours);

  // for each neighbour....
  for (let neighbour of neighbours) {
    const [nextRow, nextColumn, direction] = neighbour;

    // checking out of bound neighbour
    if (
      nextRow < 0 ||
      nextRow >= cellsVertical ||
      nextColumn < 0 ||
      nextColumn >= cellsHorizontal
    ) {
      continue;
    }
    // if the neighbour is already visited
    if (grid[nextRow][nextColumn] == true) {
      continue;
    }
    // remove the wall from either vertical or horizontal
    if (direction == "top") {
      horizontal[row - 1][column] = true;
    } else if (direction == "bottom") {
      horizontal[row][column] = true;
    } else if (direction == "left") {
      vertical[row][column - 1] = true;
    } else {
      vertical[row][column] = true;
    }
    stepThroughCell(nextRow, nextColumn);
  }
};

stepThroughCell(startRow, startColumn);

horizontal.forEach((row, rowIndex) => {
  row.forEach((element, index) => {
    if (element == true) {
      return;
    }
    const wall = Bodies.rectangle(
      index * unitLengthX + unitLengthX / 2,
      rowIndex * unitLengthY + unitLengthY,
      unitLengthX,
      5,
      {
        label: "wall",
        isStatic: true,
        render:{
            fillStyle:'red  '
        }
      }
    );
    World.add(world, wall);
  });
});

vertical.forEach((row, rowIndex) => {
  row.forEach((element, index) => {
    if (element == true) {
      return;
    }
    const wall = Bodies.rectangle(
      index * unitLengthX + unitLengthX,
      rowIndex * unitLengthY + unitLengthY / 2,
      5,
      unitLengthY,

      { label: "wall", isStatic: true,
        render:{
            fillStyle:'red',
        }
       }
    );
    World.add(world, wall);
  });
});

// Goal
const goal = Bodies.rectangle(
  width - unitLengthX / 2,
  height - unitLengthY / 2,
  unitLengthX * 0.7,
  unitLengthY * 0.7,
  {
    isStatic: true,
    label: "goal",
    render:{
        fillStyle:'green'
    }
  }
);
World.add(world, goal);

// Ball
const ballRadius = Math.min(unitLengthX, unitLengthY) / 2;
const ball = Bodies.circle(unitLengthX / 2, unitLengthY / 2, ballRadius, {
  label: "ball",
});
World.add(world, ball);

document.addEventListener("keydown", (event) => {
  const { x, y } = ball.velocity;
  if (event.code == "ArrowUp") {
    Body.setVelocity(ball, { x, y: y - 5 });
    console.log("arrow up is pressed");
  }
  if (event.code == "ArrowDown") {
    Body.setVelocity(ball, { x, y: y + 5 });

    console.log("arrow down is pressed");
  }
  if (event.code == "ArrowLeft") {
    Body.setVelocity(ball, { x: x - 5, y });

    console.log("arrow left is pressed");
  }
  if (event.code == "ArrowRight") {
    Body.setVelocity(ball, { x: x + 5, y });

    console.log("you have pressed arrow Right key");
  }
});

// Win Condition
Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((e) => {
    const labels = ["goal", "ball"];
    if (labels.includes(e.bodyA.label) && labels.includes(e.bodyB.label)) {
      world.gravity.y = 1;
      document.querySelector('.winner').classList.remove('hidden');
      world.bodies.forEach((body) => {
        if (body.label === "wall") {
          Body.setStatic(body, false);
        }
      });
    }
  });
});
