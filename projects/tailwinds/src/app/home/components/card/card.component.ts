import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'welcome-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() details: any = '';
  constructor() {}

  ngOnInit(): void {}
}
