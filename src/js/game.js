import Character from './domain.js';

class Game {
  start() {
    console.log('game started');
  }
}

export class GameSavingData {}

function readGameSaving() {}

function writeGameSaving() {}

export { readGameSaving, writeGameSaving };
export default Game;
