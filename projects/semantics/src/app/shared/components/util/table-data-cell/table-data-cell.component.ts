import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sem-table-data-cell',
  templateUrl: './table-data-cell.component.html',
  styleUrls: ['./table-data-cell.component.scss'],
})
export class TableDataCellComponent implements OnInit {
  @Input() cell: any;
  @Input() row: any;
  constructor() {}

  ngOnInit(): void {}
}
