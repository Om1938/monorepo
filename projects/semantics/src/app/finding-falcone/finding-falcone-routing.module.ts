import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinderComponent } from './components/finder/finder.component';
import { ResultComponent } from './components/result/result.component';
import { FindingFalconeComponent } from './finding-falcone.component';

const routes: Routes = [
  {
    path: '',
    component: FindingFalconeComponent,
    children: [
      {
        path: '',
        component: FinderComponent,
      },
      {
        path: 'result',
        component: ResultComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindingFalconeRoutingModule {}
