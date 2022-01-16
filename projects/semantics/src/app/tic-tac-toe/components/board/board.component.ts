import { Component, OnInit } from '@angular/core';
import { Players } from '../../models/player';
@Component({
  selector: 'sem-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  tiles: (null | 'O' | 'X')[];
  turn: 'O' | 'X';
  ties = 0;
  winner: any;

  p1 = new Players('X','Om');
  p2 = new Players('O');

  constructor() {
    this.tiles = Array(9).fill(null);
    this.turn = this.p1.getCharacter(); //Inital Turn
  }

  ngOnInit(): void {}
  tileCLick(e: any, index: number) {
    if (this.winner) return;
    if (this.tiles[index]) return;

    this.tiles[index] = this.turn;
    this.turn =
      this.turn == this.p1.getCharacter()
        ? this.p2.getCharacter()
        : this.p1.getCharacter();

    this.checkWin();
  }

  reset() {
    this.tiles = Array(9).fill(null);
    this.turn = this.p1.getCharacter();
    this.winner = null;
  }
  private checkWin() {
    let coms = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const com of coms) {
      let first = this.tiles[com[0]];
      if (!first) continue;
      if (this.tiles[com[1]] == first && this.tiles[com[2]] == first) {
        if (first == this.p1.getCharacter()) {
          this.p1.increaseScore();
          console.log(this.p1.getPlayerName(), 'wins');
        } else {
          this.p2.increaseScore();
          console.log(this.p2.getPlayerName(), 'wins');
        }

        this.winner = first;
      }
    }
    if (!this.winner && this.tiles.filter(tile => !tile).length == 0) {
      console.log('Its a tie');
      this.ties += 1;
    }
  }
}
