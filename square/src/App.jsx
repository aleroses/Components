import { generateWinningLines } from './logic/generateWinningCombos';

function App() {
  const size = 3; // o 4, o 5...
  const board = Array(size * size).fill(null);
  const wins = generateWinningLines(size);

  // console.log(wins);

  const checkWinner = (board) => {
    return wins.some((line) => {
      const [first, ...rest] = line;

      return (
        board[first] &&
        rest.every((i) => board[i] === board[first])
      );
    });
  };

  const x = checkWinner(board);
  // console.log(x);

  return <span>Check the console</span>;
}

export default App;
