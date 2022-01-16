import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sem-table-select-cell',
  templateUrl: './table-select-cell.component.html',
  styleUrls: ['./table-select-cell.component.scss']
})
export class TableSelectCellComponent implements OnInit {
  selected = false;
  @Input() cell: any;
  @Input() row: any;
  constructor() { }

  ngOnInit(): void {
  }

  checkboxClick(){
  }



}
