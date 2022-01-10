import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandyCrushRoutingModule } from './candy-crush-routing.module';
import { CandyCrushComponent } from './candy-crush.component';
import { SharedModule } from '../shared/shared.module';
import { GameComponent } from './components/game/game.component';


@NgModule({
  declarations: [
    CandyCrushComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CandyCrushRoutingModule
  ]
})
export class CandyCrushModule { }
