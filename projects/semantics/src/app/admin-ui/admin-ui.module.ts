import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUIRoutingModule } from './admin-ui-routing.module';
import { AdminUIComponent } from './admin-ui.component';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [AdminUIComponent, MainComponent],
  imports: [CommonModule, AdminUIRoutingModule, SharedModule],
})
export class AdminUIModule {}
