import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { PixelsComponent } from './pixels.component';

const routes: Routes = [
  {
    path: '',
    component: PixelsComponent,
    children: [
      {
        path: '',
        component: BoardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PixelsRoutingModule {}
