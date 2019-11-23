import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ListItemData } from 'src/modal/list-item-data';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.scss'],
})
export class TodoItemListComponent implements OnInit {

  allTodoItems: ListItemData[] = [];
  @ViewChildren('todoItemComp') todoItemList:QueryList<TodoItemComponent>;
  @ViewChild('listGenerator', {static:false}) listGenerator:IonInput;
  constructor() { }

  ngOnInit() {}

  createItem(ev){
    let val:string = ev.target.value;
    if(val && val.length == 1){
      let itemData:ListItemData = new ListItemData();
      itemData.item_name = val;
      itemData.isChecked = false;
      this.allTodoItems.push(itemData);
      this.listGenerator.value = "";
      setTimeout(() => {
        this.todoItemList.last.haveFocusOnInput();
      }, 10);
    }
  }
}
