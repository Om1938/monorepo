import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandyCrushService {
  width = 8;
  candies = ['violet', 'blue', 'green', 'yellow', 'orange', 'red'];
  private board = new BehaviorSubject<string[]>([]);
  board$ = this.board.asObservable();

  initializeBoard() {
    let board = [...Array(this.width * this.width)].map(i =>
      this.getRandomCandy(),
    );
    this.board.next([...board]);
    this.checkWin();
  }

  checkWin() {
    this.checkWinColumn(4);
    this.checkWinColumn(3);
    this.checkWinRow(4);
    this.checkWinRow(3);
  }

  checkWinColumn(nums: number) {
    let N = this.width * this.width - (this.width * (nums - 1) + 1);
    for (let i = 0; i < N; i++) {
      let candy = this.board.value[i];
      if (candy == '') continue;
      const domain = [...Array(nums)].map((_, index) => i + this.width * index);
      const board = this.board.value;
      if (domain.every(tile => board[tile] === candy)) {
        for (const candy of domain) {
          board[candy] = '';
          this.board.next([...board]);
        }
        
      }
    }
  }

  private getRandomCandy() {
    return this.candies[Math.floor(Math.random() * this.candies.length)];
  }

  checkWinRow(nums: number) {
    for (let i = 0; i < this.width * this.width; i++) {
      if (i % this.width > this.width - nums) continue;
      let candy = this.board.value[i];
      if (candy == '') continue;
      const domain = [...Array(nums)].map((_, index) => i + index);
      this.markEmpty(domain, candy);
    }
  }

  markEmpty(domain: number[], SelectedCandy: string) {
    const board = this.board.value;
    if (domain.every(tile => board[tile] === SelectedCandy)) {
      for (const candy of domain) {
        board[candy] = '';
        this.board.next([...board]);
      }
    }
  }

  constructor() {
    this.initializeBoard();
  }
}
