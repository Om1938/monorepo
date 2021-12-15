import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReusmeRoutingModule } from './reusme-routing.module';
import { ReusmeComponent } from './reusme.component';
import { PageComponent } from './components/page/page.component';


@NgModule({
  declarations: [
    ReusmeComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    ReusmeRoutingModule
  ]
})
export class ReusmeModule { }
