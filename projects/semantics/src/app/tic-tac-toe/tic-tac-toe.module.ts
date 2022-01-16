import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicTacToeRoutingModule } from './tic-tac-toe-routing.module';
import { TicTacToeComponent } from './tic-tac-toe.component';
import { SharedModule } from '../shared/shared.module';
import { BoardComponent } from './components/board/board.component';
import { TileComponent } from './components/tile/tile.component';


@NgModule({
  declarations: [
    TicTacToeComponent,
    BoardComponent,
    TileComponent
  ],
  imports: [
    CommonModule,
    TicTacToeRoutingModule,
    SharedModule
  ]
})
export class TicTacToeModule { }
