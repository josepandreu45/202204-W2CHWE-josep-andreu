const width = 3;
const height = 3;

class Ficha {
  id;
  ejeX;
  ejeY;
  live = false;

  constructor(ejeX, ejeY) {
    this.id = `#x${ejeX}y${ejeY}`;
    this.ejeX = ejeX;
    this.ejeY = ejeY;
  }
}
const grid = [];
const crearGrid = () => {
  for (let x = 0; x <= width; x++) {
    for (let y = 0; y <= height; y++) {
      grid.push(new Ficha(x, y));
    }
  }
  return grid;
};

crearGrid();
