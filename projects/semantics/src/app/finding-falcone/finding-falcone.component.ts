import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/models';
import { AppService } from './app.service';

@Component({
  selector: 'sem-finding-falcone',
  templateUrl: './finding-falcone.component.html',
  styleUrls: ['./finding-falcone.component.scss'],
})
export class FindingFalconeComponent implements OnInit {
  items: Item = {
    leftMenu: [],
    rightMenu: [
      {
        title: 'Reset',
        onClick: (e: any) => {
          this._service.resetClickSource.next('');
        },
      },
    ],
  };
  constructor(private _service: AppService) {}

  ngOnInit(): void {}
}
