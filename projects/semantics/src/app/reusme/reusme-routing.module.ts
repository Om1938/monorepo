import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './components/page/page.component';
import { ReusmeComponent } from './reusme.component';

const routes: Routes = [
  {
    path: '',
    component: ReusmeComponent,
    children: [
      {
        path: '',
        component: PageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReusmeRoutingModule {}
