const { Engine, Render, Runner, World, Bodies } = Matter;

const width = 600;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height
  }
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, {isStatic: true}),
  Bodies.rectangle(width / 2, height, width, 40, {isStatic: true}),
  Bodies.rectangle(0, height / 2, 40, height, {isStatic: true}),
  Bodies.rectangle(width, height / 2, 40, height, {isStatic: true}),
];
World.add(world, walls);




//BUILDING THE MAZE
//CREATE A GRID OF CELLS 
//pick a random starting cell
//build a randomly-ordered list of neighbors
//if a neighbor has been visited before, remove it from the list
//for each remaining neighbor, 'move' to it and remove the wall between those two cells
//Repeat for this new neighbor