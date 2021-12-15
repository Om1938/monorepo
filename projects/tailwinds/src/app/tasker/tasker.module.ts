import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskerRoutingModule } from './tasker-routing.module';
import { ListComponent } from './components/list/list.component';
import { ListsComponent } from './components/lists/lists.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskerComponent } from './tasker.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TaskerComponent, ListComponent, ListsComponent],
  imports: [
    CommonModule,
    SharedModule,
    TaskerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
  ],
  bootstrap: [TaskerComponent],
})
export class TaskerModule {}
