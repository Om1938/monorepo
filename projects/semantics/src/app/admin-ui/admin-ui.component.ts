import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/models';

@Component({
  selector: 'sem-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.scss'],
})
export class AdminUIComponent implements OnInit {
  items: Item = {};
  constructor() {}

  ngOnInit(): void {}
}
