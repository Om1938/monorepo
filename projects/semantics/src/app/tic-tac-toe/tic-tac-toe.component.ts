import { Component, OnInit } from '@angular/core';
import { Item, MenuList } from '../shared/models';

@Component({
  selector: 'sem-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent implements OnInit {
  items: Item = {}
  constructor() {}

  ngOnInit(): void {}
}
