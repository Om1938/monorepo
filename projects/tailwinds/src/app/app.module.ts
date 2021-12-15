import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { TaskerModule } from './tasker/tasker.module';

import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TaskerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
