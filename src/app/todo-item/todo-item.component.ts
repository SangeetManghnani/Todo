import { Component, OnInit, Input } from '@angular/core';
import { ListItemData } from 'src/modal/list-item-data';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {

  todoItem:ListItemData = new ListItemData();
  constructor() { }
  ngOnInit() {
    this.todoItem.isChecked = false;
  }

}
