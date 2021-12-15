import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';
const primeModules: any[] = [
  MenubarModule,
  ButtonModule,
  InputTextModule,
  SharedModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...primeModules],
})
export class PrimengModule {}
