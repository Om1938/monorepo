import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PixelsRoutingModule } from './pixels-routing.module';
import { PixelsComponent } from './pixels.component';
import { SharedModule } from '../shared/shared.module';
import { BoardComponent } from './components/board/board.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [PixelsComponent, BoardComponent],
  imports: [CommonModule, PixelsRoutingModule, SharedModule, DragDropModule],
})
export class PixelsModule {}
