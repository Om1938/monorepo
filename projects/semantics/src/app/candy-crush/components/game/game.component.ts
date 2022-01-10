import { Component, OnInit } from '@angular/core';
import { CandyCrushService } from '../../services/candy-crush.service';

@Component({
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  board: any[] = [];
  constructor(private _service: CandyCrushService) {}
  ngOnInit(): void {
    this._service.board$.subscribe(res => {
      this.board = res;
    });
  }
}
