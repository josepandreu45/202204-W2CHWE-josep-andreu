const rows = 5;
const columns = 8;

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
      alive.push(`${grid[i].id} ${grid[i].live}`);
    } else {
      dead.push(`${grid[i].id} ${grid[i].live}`);
    }
  }
  return alive;
};

const mappingBeightbours = () => {
  for (let i = 0; i < grid.length; i++) {
    const idValue = i + 1;

    grid[i].id = idValue;
    if (typeof grid[i - columns] === "undefined") {
      grid[i].topId = "border";
    } else {
      grid[i].topId = grid[i - columns].live;
    }

    if (
      typeof grid[i + 1 - columns] === "undefined" ||
      (i + 1) % columns === 0
    ) {
      grid[i].rightTopCornerId = "border";
    } else {
      grid[i].rightTopCornerId = grid[i + 1 - columns].live;
    }

    if (typeof grid[i + 1] === "undefined" || (i + 1) % columns === 0) {
      grid[i].rightId = "border";
    } else {
      grid[i].rightId = grid[i + 1].live;
    }

    if (
      typeof grid[i + 1 + columns] === "undefined" ||
      (i + 1) % columns === 0
    ) {
      grid[i].rightBottomCornerID = "border";
    } else {
      grid[i].rightBottomCornerID = grid[i + 1 + columns].live;
    }

    if (typeof grid[i + columns] === "undefined") {
      grid[i].bottomId = "border";
    } else {
      grid[i].bottomId = grid[i + columns].live;
    }

    if (
      typeof grid[i - 1 + columns] === "undefined" ||
      (i + columns) % columns === 0
    ) {
      grid[i].leftBottomCornerID = "border";
    } else {
      grid[i].leftBottomCornerID = grid[i - 1 + columns].live;
    }

    if (typeof grid[i - 1] === "undefined" || (i + columns) % columns === 0) {
      grid[i].leftId = "border";
    } else {
      grid[i].leftId = grid[i - 1].live;
    }

    if (
      typeof grid[i - 1 - columns] === "undefined" ||
      (i + columns) % columns === 0
    ) {
      grid[i].letfTopCornerId = "border";
    } else {
      grid[i].letfTopCornerId = grid[i - 1 - columns].live;
    }
  }
};

grid[7 - 1].live = true;
grid[10 - 1].live = true;
grid[11 - 1].live = true;
grid[12 - 1].live = true;
grid[21 - 1].live = true;
grid[22 - 1].live = true;
grid[28 - 1].live = true;

mappingBeightbours();
estadoFicha();
