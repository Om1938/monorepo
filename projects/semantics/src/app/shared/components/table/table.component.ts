import { Component, Input, OnInit } from '@angular/core';
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

  ngOnInit(): void {}
}
