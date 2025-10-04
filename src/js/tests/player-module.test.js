import { createGameboard } from '../gameboard-module';
import { createComputerPlayer, createHumanPlayer } from '../player-module';

describe('Player module tests', () => {
  let human;
  let computer;

  beforeAll(() => {
    human = createHumanPlayer('Mike');
    computer = createComputerPlayer('Robot');
  });

  test('Player objects', () => {
    console.log(human);
    console.log(computer);
  });
});
