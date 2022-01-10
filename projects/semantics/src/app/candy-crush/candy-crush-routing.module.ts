import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandyCrushComponent } from './candy-crush.component';
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  {
    path: '',
    component: CandyCrushComponent,
    children: [{ path: '', component: GameComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandyCrushRoutingModule {}
