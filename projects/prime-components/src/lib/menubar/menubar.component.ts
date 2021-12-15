import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'myp-menubar',
  template: `
    <p-menubar [model]="items">
      <ng-template pTemplate="start">
        <img src="assets/primeng.svg" height="40" class="p-mr-2" />
      </ng-template>
      <ng-template pTemplate="end">
        <input type="text" pInputText placeholder="Search" />
      </ng-template>
    </p-menubar>
  `,
  styleUrls: ['./menubar.component.scss'],
})
export class MenubarComponent implements OnInit {
  constructor() {}
  @Input() items!: MenuItem[];

  ngOnInit(): void {}
}
