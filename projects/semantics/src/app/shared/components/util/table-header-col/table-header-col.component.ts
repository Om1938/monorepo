import {
  AfterViewInit,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { colDefs } from '../../../models/colDefs';
import { colDefsType } from '../../../models/colDefsType';

@Component({
  selector: 'sem-table-header-col',
  templateUrl: './table-header-col.component.html',
  styleUrls: ['./table-header-col.component.scss'],
})
export class TableHeaderColComponent implements OnInit, AfterViewInit {
  @Input() header!: colDefs;
  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.header);
  }

  isSelect() {
    return this.header.type && this.header.type == colDefsType.Select;
  }

  ngOnInit(): void {}
}
