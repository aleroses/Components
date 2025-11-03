export function generateWinningLines(size) {
  const wins = [];

  // Filas
  for (let row = 0; row < size; row++) {
    const line = [];

    for (let col = 0; col < size; col++) {
      // 0 1 2 - 3 4 5 - 6 7 8
      line.push(row * size + col);
    }
    wins.push(line);
  }

  // Columnas
  for (let col = 0; col < size; col++) {
    const line = [];

    for (let row = 0; row < size; row++) {
      line.push(row * size + col);
    }
    wins.push(line);
  }

  // Diagonal principal ↘
  const mainDiagonal = [];

  for (let i = 0; i < size; i++) {
    mainDiagonal.push(i * size + i);
  }
  wins.push(mainDiagonal);

  // Diagonal secundaria ↙
  const antiDiagonal = [];

  for (let i = 0; i < size; i++) {
    antiDiagonal.push(i * size + (size - 1 - i));
  }
  wins.push(antiDiagonal);

  return wins;
}
