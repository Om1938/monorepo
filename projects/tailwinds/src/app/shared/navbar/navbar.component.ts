import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() appName: string = '';
  @Input() tasks: any[] = [];

  constructor() {}
  showMenu = false;

  ngOnInit(): void {}

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }
  emitTask(task: any) {
    if (task.subject) task.subject.next('clicked');
  }
}
