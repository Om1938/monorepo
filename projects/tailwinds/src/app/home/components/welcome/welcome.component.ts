import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  tasks = [];
  cards = [
    {
      header: 'Tasker',
      description: 'A Task management Application built in angular.',
      hashtags: ['Task', 'DragnDrop'],
      routerLink: 'tasker',
      image: 'tasker.jpg',
    },
    {
      header: 'Pixel Puzzle',
      description: 'A Pixels Puzzle Game Application built in angular.',
      hashtags: ['pixels', 'Puzzle', 'DragnDrop'],
      routerLink: 'pixels',
      image: 'pixels.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
