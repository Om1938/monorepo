import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUIComponent } from './admin-ui.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: AdminUIComponent,
    children: [{ path: '', component: MainComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUIRoutingModule {}
