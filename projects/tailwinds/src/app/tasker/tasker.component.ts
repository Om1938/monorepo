import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './tasker.component.html',
  styleUrls: ['./tasker.component.scss'],
})
export class TaskerComponent {
  title = 'tasker';
  showMenu = false;
  navTasks = [
    { text: '+ Add New Task', subject: this._service.AddListclickSource },
  ];
  constructor(public _service: TaskService) {}
  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
}
