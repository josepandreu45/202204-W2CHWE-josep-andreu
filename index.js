const rows = 8;
const columns = 5;

class Ficha {
  ejeX;
  ejeY;
  live = false;

  constructor(ejeX, ejeY) {
    this.ejeX = ejeX;
    this.ejeY = ejeY;
  }
}
const grid = [];
const crearGrid = () => {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      grid.push(new Ficha(x, y));
    }
  }

  for (let i = 0; i < grid.length; i++) {
    grid[i].id = i + 1;
  }
  return grid;
};
crearGrid();

const alive = [];
const dead = [];

const estadoFicha = () => {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i].live === true) {
      alive.push(grid[i]);
    } else {
      dead.push(grid[i]);
    }
  }
  return alive;
};

const neightbours = () => {
  for (let i = 0; i < grid.length; i++) {
    const id = i + 1;
    grid[i].id = id;
    grid[i].rightId = grid[id + 1];
    grid[i].leftId = grid[id - 1];
    grid[i].topId = grid[id + columns];
    grid[i].bottomId = grid[id - columns];
    grid[i].rightTopId = grid[id + columns + 1];
    grid[i].leftTopId = grid[id + columns - 1];
    grid[i].rightBottomId = grid[id - columns + 1];
    grid[i].leftBottomId = grid[id - columns - 1];
  }
};

grid[7 - 1].live = true;
grid[10 - 1].live = true;
grid[11 - 1].live = true;
grid[12 - 1].live = true;
grid[21 - 1].live = true;
grid[22 - 1].live = true;
grid[28 - 1].live = true;

neightbours();
estadoFicha();
