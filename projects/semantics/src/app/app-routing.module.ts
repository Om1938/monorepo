import { ResultComponent } from './finding-falcone/components/result/result.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinderComponent } from './finding-falcone/components/finder/finder.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./finding-falcone/finding-falcone.module').then(
        m => m.FindingFalconeModule,
      ),
  },
  {
    path: 'findingFalcone',
    loadChildren: () =>
      import('./finding-falcone/finding-falcone.module').then(
        m => m.FindingFalconeModule,
      ),
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./reusme/reusme.module').then(m => m.ReusmeModule),
  },
  {
    path: 'adminUI',
    loadChildren: () =>
      import('./admin-ui/admin-ui.module').then(m => m.AdminUIModule),
  },
  { path: 'ccrush', loadChildren: () => import('./candy-crush/candy-crush.module').then(m => m.CandyCrushModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
