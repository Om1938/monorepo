export class Players {
  private name: string;
  private character: 'O' | 'X';
  private score: number;

  constructor(charater: 'O' | 'X', name?: string) {
    this.character = charater;
    this.score = 0;
    this.name = name || (charater == 'X' ? 'Player 1' : 'Player 2');
  }

  getPlayerName() {
    return this.name;
  }
  getCharacter() {
    return this.character;
  }
  getScore() {
    return this.score;
  }

  increaseScore() {
    this.score += 1;
  }
}
