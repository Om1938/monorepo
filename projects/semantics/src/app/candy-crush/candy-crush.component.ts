import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/models';

@Component({
  selector: 'sem-candy-crush',
  templateUrl: './candy-crush.component.html',
  styleUrls: ['./candy-crush.component.scss']
})
export class CandyCrushComponent implements OnInit {
  items: Item = {};

  constructor() { }

  ngOnInit(): void {
  }

}
