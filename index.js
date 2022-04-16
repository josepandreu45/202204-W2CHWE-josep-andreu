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
