import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [WelcomeComponent, CardComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
  exports: [WelcomeComponent],
})
export class HomeModule {}
