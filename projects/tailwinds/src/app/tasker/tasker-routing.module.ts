import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListsComponent } from './components/lists/lists.component';
import { TaskerComponent } from './tasker.component';

const routes: Routes = [
  {
    path: '',
    component: TaskerComponent,
    children: [
      {
        path: '',
        component: ListsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskerRoutingModule {}
