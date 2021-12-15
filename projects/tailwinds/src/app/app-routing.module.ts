import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'tasker',
    loadChildren: () =>
      import('./tasker/tasker.module').then((m) => m.TaskerModule),
  },
  {
    path: 'pixels',
    loadChildren: () =>
      import('./pixels/pixels.module').then((m) => m.PixelsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
