import { Component, Input, OnInit } from '@angular/core';
import { colDefs } from '../../models/colDefs';
import { colDefsType } from '../../models/colDefsType';
import { tableColOption } from '../../models/tableColOption';

@Component({
  selector: 'sem-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() tableOption!: tableColOption;
  @Input() tableRows: any;
  constructor() {}

  isSelect = (cell:colDefs)=> cell.type === colDefsType.Select

  ngOnInit(): void {}
}
