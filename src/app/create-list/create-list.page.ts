import { Component, OnInit, ViewChild } from '@angular/core';
import { ListData } from 'src/modal/list-data';
import { ListItemData } from 'src/modal/list-item-data';
import { TodoItemListComponent } from '../todo-item-list/todo-item-list.component';
import { UtilService } from 'src/services/utils-service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.page.html',
  styleUrls: ['./create-list.page.scss'],
})
export class CreateListPage implements OnInit {

  @ViewChild('todoListItem' ,{static:false}) todoListItem:TodoItemListComponent
  todoList:ListData = new ListData();
  enableTodoList:boolean = false;

  constructor(
    public utilService:UtilService
  ) { }

  ngOnInit() {
  }

  switchTodoListTask(){
    this.enableTodoList = !this.enableTodoList;
  }

  selectPriority(priority:string){
    this.todoList.priority = priority;
  }

  saveList(){
    if(this.todoListItem && this.todoListItem.allTodoItems && this.todoListItem.allTodoItems.length > 0){
      this.todoList.items = this.todoListItem.allTodoItems;
    }
    if(!this.todoList.priority){
      this.todoList.priority = "low";
    }
    if(!this.todoList.date){
      this.utilService.presentToast("Please provide date to continue");
      return;
    }
    this.todoList.date = this.utilService.getFormattedDate(this.todoList.date);
    this.todoList.time = this.utilService.getFormattedTime(this.todoList.time);
    this.utilService.storeCreateList(this.todoList);
    console.log(this.todoList);
  
  }

}
