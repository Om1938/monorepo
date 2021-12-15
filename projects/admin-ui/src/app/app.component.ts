import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from './theme.service';

@Component({
  selector: 'aui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AdminUI';
  items!: MenuItem[];
  constructor(private theme: ThemeService) {}
  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Bookmark',
                icon: 'pi pi-fw pi-bookmark',
              },
              {
                label: 'Video',
                icon: 'pi pi-fw pi-video',
              },
            ],
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash',
          },
          {
            separator: true,
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link',
          },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left',
          },
          {
            label: 'Right',
            icon: 'pi pi-fw pi-align-right',
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center',
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify',
          },
        ],
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',
          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print',
                  },
                ],
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List',
              },
            ],
          },
        ],
      },
      {
        label: 'Theme',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Dark',
            icon: 'pi pi-fw pi-pencil',
            command: () => {
              this.theme.switchTheme('md-dark-deeppurple');
            },
          },
          {
            label: 'Light',
            icon: 'pi pi-fw pi-pencil',
            command: () => {
              this.theme.switchTheme('md-light-deeppurple');
            },
          },
        ],
      },

      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
      },
    ];
  }
}
