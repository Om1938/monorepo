import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../models';

@Component({
  selector: 'sem-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() title: string = 'SemanticUI';
  @Input() items: Item = {} as Item;
  constructor() {}

  clickItem(e: any, item: any) {
    if (item.onClick) {
      item.onClick(e);
    }
  }
  ngOnInit(): void {}
}
