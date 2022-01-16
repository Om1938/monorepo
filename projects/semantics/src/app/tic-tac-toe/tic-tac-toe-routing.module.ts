import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { TicTacToeComponent } from './tic-tac-toe.component';

const routes: Routes = [{ path: '', component: TicTacToeComponent,children:[
  {
    path:'',
    component : BoardComponent
  }
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicTacToeRoutingModule { }
