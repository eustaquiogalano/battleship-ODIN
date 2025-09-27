import { createGameboard } from '../gameboard-module';
import { createComputerPlayer, createHumanPlayer } from '../player-module';

describe('Player module tests', () => {
  let human;
  let computer;

  beforeAll(() => {
    human = createHumanPlayer('Mike', createGameboard(5));
    computer = createComputerPlayer('Robot', createGameboard(5));
  });

  test('Player objects', () => {
    console.log(human);
    console.log(computer);
  });
});
