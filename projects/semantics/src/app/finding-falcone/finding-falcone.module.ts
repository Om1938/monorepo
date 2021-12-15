import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindingFalconeRoutingModule } from './finding-falcone-routing.module';
import { FindingFalconeComponent } from './finding-falcone.component';
import { SharedModule } from '../shared/shared.module';
import { FinderComponent } from './components/finder/finder.component';
import { TravelComponent } from './components/travel/travel.component';
import { ChooseVehicleComponent } from './components/choose-vehicle/choose-vehicle.component';
import { ResultComponent } from './components/result/result.component';
import { DropdownComponent } from './components/util/dropdown/dropdown.component';
import { DropdownItemComponent } from './components/util/dropdown-item/dropdown-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostInterceptor } from './post.interceptor';

@NgModule({
  declarations: [
    FindingFalconeComponent,
    FinderComponent,
    TravelComponent,
    ChooseVehicleComponent,
    ResultComponent,
    DropdownComponent,
    DropdownItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FindingFalconeRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: PostInterceptor, multi: true },
  ],
})
export class FindingFalconeModule {}
