const rows = 5;
const columns = 8;

class Ficha {
  ejeX;
  ejeY;
  live = 0;

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
grid[7 - 1].live = 1;
grid[10 - 1].live = 1;
grid[11 - 1].live = 1;
grid[12 - 1].live = 1;
grid[21 - 1].live = 1;
grid[22 - 1].live = 1;
grid[28 - 1].live = 1;

mappingBeightbours();

const container = document.querySelector(".container");
const createGrid = (row, column) => {
  container.style.setProperty("--grid-rows", row);
  container.style.setProperty("--grid-cols", column);
  for (let y = 0; y < row; y++) {
    for (let x = 0; x < column; x++) {
      const cell = document.createElement("div");
      cell.id = 0;

      cell.data = {
        idX: x,
        idY: y,
      };
      container.appendChild(cell).className = "container__item";
    }
  }
};

createGrid(rows, columns);
