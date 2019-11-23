import { Component, OnInit } from '@angular/core';
import { ListItemData } from 'src/modal/list-item-data';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.scss'],
})
export class TodoItemListComponent implements OnInit {

  allTodoItems: ListItemData[] = [];
  constructor() { }

  ngOnInit() {}

  createItem(ev){
    let val:string = ev.target.value;
    if(val && val.length == 1){
      let itemData:ListItemData = new ListItemData();
      itemData.item_name = val;
      itemData.isChecked = false;
      this.allTodoItems.push(itemData);
    }
  }
}
