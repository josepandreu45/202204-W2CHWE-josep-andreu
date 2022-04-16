const rows = 3;
const columns = 3;

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
    if (grid[i].live) {
      alive.push(grid[i]);
    } else {
      dead.push(grid[i]);
    }
  }
  return alive;
};

estadoFicha();

const neightbours = () => {
  for (let i = 0; i < grid.length; i++) {
    grid[i].rightId = i + 1;
    grid[i].leftId = i - 1;
    grid[i].topId = i + columns;
    grid[i].bottomId = i - columns;
    grid[i].rightTopId = i + columns + 1;
    grid[i].leftTopId = i + columns - 1;
    grid[i].rightBottomId = i - columns + 1;
    grid[i].leftBottomId = i - columns - 1;
  }
};

neightbours();
