import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { List } from '../../models/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() list!: List;
  @Output() dropped = new EventEmitter<any>();
  @Output() deleteData = new EventEmitter<any>();

  Adding = false;
  Editing = -1;
  EditingListName = false;

  addTaskControl = new FormControl('', Validators.required);
  editTaskControl = new FormControl('', Validators.required);
  editListNameControl = new FormControl('', Validators.required);

  constructor() {}

  ngOnInit(): void {}

  AddTask() {
    if (this.addTaskControl.valid) {
      this.list.list.push(this.addTaskControl.value);
      this.addTaskControl.reset();
      this.Adding = false;
    }
  }

  /**
   *
   * @param index Index of element to be deleted
   */
  delete(index: number) {
    this.list.list.splice(index, 1);
  }
  /**
   *
   * Utitlily function for setting 'Editing' to index of currently editing list item.
   * @param index Index of element to be edited
   */
  edit(index: number) {
    this.editTaskControl.setValue(this.list.list[index]);
    this.Editing = index;
  }

  /**
   *
   * Function for Updating the value of currently editing item.
   * @param index Index of element to be updated
   */
  Update(index: number) {
    this.list.list[index] = this.editTaskControl.value;
    this.editTaskControl.reset();
    this.Editing = -1;
  }
  /**
   *
   * Utitlily function for setting Editing Input value to list name and show the input.
   */
  EditListName() {
    this.editListNameControl.setValue(this.list.name);
    this.EditingListName = true;
  }
  /**
   * Function for updating the list name using value from FormControl
   */
  UpdateListName() {
    this.list.name = this.editListNameControl.value;
    this.editListNameControl.reset();
    this.EditingListName = false;
  }
  //#region Even Emitters for a drop event or deleting the list
  drop(e: any) {
    this.dropped.emit(e);
  }

  deleteList() {
    this.deleteData.emit(this.list.id);
  }
  //#endregion
}
