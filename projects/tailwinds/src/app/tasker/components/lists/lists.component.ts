import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TaskService } from '../../task.service';
import { List } from '../../models/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
  // Counter for generating the id for a list.
  counter = 0;
  // Initial Values of list. Can be removed when backend is added and replace by empty list [].
  lists: List[] = [
    {
      id: ++this.counter,
      name: 'Todo',
      list: ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'],
    },
    {
      id: ++this.counter,
      name: 'Done',
      list: [
        'Dont Get to work',
        'Dont Pick up groceries',
        'Plz Go home',
        'and Fall asleep',
      ],
    },
  ];
  modalToggle = false;
  addList = new FormControl('', Validators.required);

  constructor(private readonly _service: TaskService) {}

  ngOnInit(): void {
    this._service.AddListclickSource.subscribe(() => {
      // this.lists.push({ name: 'newList', list: [] });
      this.modalToggle = true;
    });
  }

  /**
   * Add a new list : Called from modal and picking values from addList Form Control
   */
  AddList() {
    if (this.addList.valid) {
      this.lists.push({
        id: ++this.counter, // Can be removed if the id for list comes from the Backend.
        name: this.addList.value,
        list: [],
      });
      this.modalToggle = false;
      this.addList.reset();
    }
  }

  /**
   * Event being emitted from a list, to delete itself from lists array
   * @param id id of list to be deleted
   */
  deleteList(id: number) {
    let index = this.lists.findIndex((list) => list.id == id);
    if (index !== -1) {
      this.lists.splice(index, 1);
    }
  }

  /**
   *
   * @param event is a cdkDropEvent emitted from a list.
   *
   * Function will check if the drop happened from a list to another list or same list.
   * Case 1 : If if the drop happened from a list to another list
   *          Move the item from the source list[previousContainer] to target list[container].
   * Case 2 : If if the drop happened from a list to Same list
   *          move the array to designated position in the list.
   */
  drop(event: any) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
