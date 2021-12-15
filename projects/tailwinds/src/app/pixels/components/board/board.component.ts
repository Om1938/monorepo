import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor() {}
  disableDrag = true;
  winner = false;

  nums = [
    [{ key: 1, image: '1.png' }],
    [{ key: 2, image: '2.png' }],
    [{ key: 3, image: '3.png' }],
    [{ key: 4, image: '4.png' }],
    [{ key: 5, image: '5.png' }],
    [{ key: 6, image: '6.png' }],
    [{ key: 7, image: '7.png' }],
    [{ key: 8, image: '8.png' }],
    [{ key: 9, image: '9.png' }],
  ];
  result = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  ngOnInit(): void {
    this.ShuffleImages();
  }

  drop(event: any) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        0,
        0
      );
      transferArrayItem(
        event.container.data,
        event.previousContainer.data,
        1,
        0
      );
    } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    if (this.checkWin()) {
      console.log('Congratulations..');
      this.disableDrag = true;
      this.winner = true;
    }
  }

  checkWin() {
    let winning = true;
    let nums = this.nums.map((i) => i.map((j) => j.key));
    if (nums.length === this.result.length) {
      for (let i = 0; i < this.result.length; i++) {
        if (this.result[i] !== nums[i][0]) {
          winning = false;
        }
      }
      return winning;
    }
    return false;
  }

  ShuffleImages() {
    this.nums = this.nums.sort(() => 0.5 - Math.random());
    this.disableDrag = false;
    this.winner = false;
  }
}
