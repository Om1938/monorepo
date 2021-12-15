import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { PrimeComponentsComponent } from './prime-components.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [PrimeComponentsComponent, MenubarComponent],
  imports: [MenubarModule, SharedModule],
  exports: [PrimeComponentsComponent, MenubarComponent],
})
export class PrimeComponentsModule {}
